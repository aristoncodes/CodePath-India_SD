import { PrismaClient } from '@prisma/client';

// Singleton Pattern — ensures one DB connection instance
class PrismaClientSingleton {
  private static instance: PrismaClient;

  private constructor() {}

  public static getInstance(): PrismaClient {
    if (!PrismaClientSingleton.instance) {
      PrismaClientSingleton.instance = new PrismaClient({
        log: process.env.NODE_ENV === 'development' ? ['query', 'error'] : ['error'],
      });
    }
    return PrismaClientSingleton.instance;
  }
}

export const prisma = PrismaClientSingleton.getInstance();
