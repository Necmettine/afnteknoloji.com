import Redis from "ioredis";

let client: Redis | null = null;

export function getRedis(): Redis {
  if (!client) {
    client = new Redis(process.env.REDIS_URL!, {
      maxRetriesPerRequest: 3,
      lazyConnect: true,
      tls: process.env.REDIS_URL?.includes("redislabs.com") ? {} : undefined,
    });
  }
  return client;
}

export async function kvGet<T>(key: string): Promise<T | null> {
  try {
    const redis = getRedis();
    const val = await redis.get(key);
    return val ? JSON.parse(val) : null;
  } catch {
    return null;
  }
}

export async function kvSet(key: string, value: unknown): Promise<void> {
  const redis = getRedis();
  await redis.set(key, JSON.stringify(value));
}
