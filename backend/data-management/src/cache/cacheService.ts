import Redis from 'ioredis';

const redis = new Redis({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: Number(process.env.REDIS_PORT) || 6379,
  password: process.env.REDIS_PASSWORD || undefined,
});

redis.on('connect', () => {
  console.log('Connected to the Redis server');
});

redis.on('error', (err) => {
  console.error('Redis error', err);
});

export const setCache = async (key: string, value: string, expireTime: number = 3600) => {
  await redis.set(key, value, 'EX', expireTime);
};

export const getCache = async (key: string): Promise<string | null> => {
  return await redis.get(key);
};

export const deleteCache = async (key: string) => {
  await redis.del(key);
};

export const close = () => redis.quit();
