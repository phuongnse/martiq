import Redis from "ioredis";

const redis = new Redis({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: Number(process.env.REDIS_PORT) || 6379,
  password: process.env.REDIS_PASSWORD || undefined,
  db: parseInt(process.env.REDIS_DB || "0", 10),
  lazyConnect: true,
  maxRetriesPerRequest: null, // Disable automatic retries
  connectTimeout: 10000, // Set a connection timeout of 10 seconds
});
