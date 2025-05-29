import { z } from 'zod';

export const envSchema = z.object({
  VITE_API_URL: z.string(),
  VITE_GAIA_APP_URL: z.string(),
  VITE_CRIA_APP_URL: z.string(),
});

export const env = envSchema.parse(import.meta.env);
