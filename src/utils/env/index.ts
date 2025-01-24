import { z } from 'zod';

export const envSchema = z.object({
  REACT_APP_API_URL: z.string(),
});

export const env = envSchema.parse(process.env);
