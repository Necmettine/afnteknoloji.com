import { kv } from "@vercel/kv";
import { createHash } from "crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { createClient } from "redis";

export type OfferResponseStatus = "positive" | "negative";

export interface OfferResponseRecord {
  id: string;
  offerId: number;
  status: OfferResponseStatus;
  token: string;
  createdAt: string;
  source: "public" | "internal";
  companyName?: string;
  fileName?: string;
  offerDate?: string;
}

const DATA_DIR = join(process.cwd(), "data");
const RESPONSES_PATH = join(DATA_DIR, "offer-responses.json");
const hasKvStore = Boolean(
  (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) ||
    (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN),
);
const hasRedisUrl = Boolean(process.env.REDIS_URL);
const offerResponseKey = (offerId: number) => `offer-response:${offerId}`;
type BasicRedisClient = {
  get(key: string): Promise<string | null>;
  set(key: string, value: string): Promise<unknown>;
};
let redisClientPromise: Promise<BasicRedisClient | null> | null = null;

async function getRedisClient() {
  if (!process.env.REDIS_URL) {
    return null;
  }

  if (!redisClientPromise) {
    const client = createClient({
      url: process.env.REDIS_URL,
    });

    redisClientPromise = client.connect().then(() => client as unknown as BasicRedisClient);
  }

  return redisClientPromise;
}

function readResponses(): OfferResponseRecord[] {
  if (!existsSync(RESPONSES_PATH)) {
    return [];
  }

  try {
    return JSON.parse(readFileSync(RESPONSES_PATH, "utf-8")) as OfferResponseRecord[];
  } catch {
    return [];
  }
}

function writeResponses(responses: OfferResponseRecord[]) {
  try {
    if (!existsSync(DATA_DIR)) {
      mkdirSync(DATA_DIR, { recursive: true });
    }

    writeFileSync(RESPONSES_PATH, JSON.stringify(responses, null, 2), "utf-8");
  } catch {
    // Vercel gibi ortamlarda dosya sistemi yazimi kapali olabilir.
  }
}

export function buildOfferResponseToken(offerId: number, status: OfferResponseStatus) {
  return createHash("sha256")
    .update(`afn-offer:${offerId}:${status}`, "utf8")
    .digest("hex");
}

export async function storeOfferResponse(input: Omit<OfferResponseRecord, "id" | "createdAt">) {
  const record: OfferResponseRecord = {
    ...input,
    id: `${input.offerId}-${input.status}-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };

  try {
    if (hasRedisUrl) {
      const client = await getRedisClient();
      await client?.set(offerResponseKey(input.offerId), JSON.stringify(record));
      return record;
    }

    if (hasKvStore) {
      await kv.set(offerResponseKey(input.offerId), record);
      return record;
    }

    const responses = readResponses();
    responses.unshift(record);
    writeResponses(responses);
  } catch {
    // Kayit dosyaya yazilamasa bile kullaniciya yanit ekranini gostermeye devam et.
  }

  return record;
}

export async function getLatestOfferResponse(offerId: number) {
  if (hasRedisUrl) {
    const client = await getRedisClient();
    const raw = await client?.get(offerResponseKey(offerId));
    return raw ? (JSON.parse(raw) as OfferResponseRecord) : null;
  }

  if (hasKvStore) {
    const record = await kv.get<OfferResponseRecord>(offerResponseKey(offerId));
    return record ?? null;
  }

  const responses = readResponses();
  return responses.find((item) => item.offerId === offerId) ?? null;
}
