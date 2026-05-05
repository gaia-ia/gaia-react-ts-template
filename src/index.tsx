import '@gaia-dev/theme/index.css';

import * as Sentry from '@sentry/react';
import { env } from '@utils/env';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { bootstrapAuth } from './bootstrap';

bootstrapAuth();

Sentry.init({
  dsn: env.VITE_SENTRY_DSN,
  integrations: [Sentry.browserTracingIntegration()],
  sendDefaultPii: true,
  tracesSampleRate: 1.0,
  enabled: env.VITE_IS_SENTRY_ENABLED === 'true',
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
