export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'stage';
      BACKEND_PORT: number;
      MONGODB_URL: string;
    }
  }
}
