import Redis from "ioredis";

let client: Redis | null = null;

export function getRedis(): Redis {
  if (!client) {
    const url = process.env.REDIS_URL!;
    const useTls = url.startsWith("rediss://");
    client = new Redis(url, {
      maxRetriesPerRequest: 3,
      lazyConnect: true,
      tls: useTls ? {} : undefined,
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
