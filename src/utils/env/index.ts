import { z } from 'zod';

export const envSchema = z.object({
  VITE_API_URL: z.string(),
  VITE_GAIA_APP_URL: z.string(),
  VITE_CRIA_APP_URL: z.string(),
  VITE_BRANDSYNC_APP_URL: z.string(),
  VITE_COPIA_APP_URL: z.string(),
  VITE_CVC_DASHBOARD_APP_URL: z.string(),
  VITE_SENTRY_DSN: z.string(),
  VITE_IS_SENTRY_ENABLED: z.string(),
});

export const env = envSchema.parse(import.meta.env);
