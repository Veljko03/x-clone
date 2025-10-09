import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,

  EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY:
    process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,

  MONGO_URL: process.env.MONGO_URL,

  ARCJET_ENV: process.env.ARCJET_ENV,
  ARCJET_KEY: process.env.ARCJET_KEY,

  CLAUDINARY_NAME: process.env.CLAUDINARY_NAME,
  CLAUDINARY_API: process.env.CLAUDINARY_API,
  CLAUDINARY_SECRET: process.env.CLAUDINARY_SECRET,
};
