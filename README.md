# gaia-react-ts-template

A production-ready React 19 + TypeScript + Vite starter template used across all Gaia frontend applications.

![Node](https://img.shields.io/badge/node-18%2B-green) ![pnpm](https://img.shields.io/badge/pnpm-10%2B-orange) ![React](https://img.shields.io/badge/react-19-blue) ![TypeScript](https://img.shields.io/badge/typescript-strict-blue)

---

## Overview

This template ships with everything a Gaia frontend app needs from day one:

- **React 19 + Vite 6 + TypeScript** (strict mode)
- **Authentication** — token-based flow via URL param → localStorage
- **Role-based protected routing** via React Router v7
- **API layer** — Axios instance + TanStack Query v5 hooks
- **Internationalization** — EN / ES / PT via i18next
- **Light/dark theming** via `@gaia-dev/ui` and `@gaia-dev/theme`
- **Toast notifications** via react-toastify
- **Error tracking** via Sentry (opt-in)
- **CI enforcement** — Biome + ESLint + TypeScript checks on every PR
- **Storybook 8** component explorer

---

## Tech Stack

| Category | Library | Version |
|---|---|---|
| UI Framework | React | 19 |
| Build Tool | Vite (SWC) | 6 |
| Language | TypeScript | 6 |
| Routing | React Router | 7 |
| Data Fetching | TanStack Query | 5 |
| HTTP Client | Axios | 1 |
| Forms | React Hook Form | 5 |
| Validation | Zod | 3 |
| i18n | i18next + react-i18next | 25 |
| Icons | Lucide React | 0.475 |
| Component Library | @gaia-dev/ui | 4 |
| Design Tokens | @gaia-dev/theme | 1 |
| Notifications | react-toastify | 11 |
| Error Tracking | @sentry/react | 10 |
| Linter/Formatter | Biome | 2 |
| Component Explorer | Storybook | 8 |

---

## Getting Started

### 1. Use this template on GitHub

Go to the repository on GitHub and click **"Use this template"** → **"Create a new repository"**. This creates a fresh copy of the template under your account or organization without carrying over the commit history.

**Repository naming convention:** Name your new repository following the `{product}-app-front` pattern used by all existing Gaia frontend repos:

| Repo name |
|---|
| `gaia-app-front` |
| `cria-app-front` |
| `copia-app-front` |
| `brandsync-app-front` |

Then clone your new repository:

```bash
git clone <your-new-repo-url>
cd <your-new-repo>
```

### 2. Install dependencies

```bash
pnpm install
```

> Requires **Node 18+** and **pnpm 10+**. Check with `node -v` and `pnpm -v`.

### 3. Configure environment variables

```bash
cp .env.example .env
```

Open `.env` and fill in the values. See the [Environment Variables](#environment-variables) section below for details.

> **Contact a responsible developer** on the team to obtain the correct values for your environment. These are not committed to the repository.

### 4. Start the dev server

```bash
pnpm start
```

The app runs at [http://localhost:3002](http://localhost:3002).

---

## Login dependency

Authentication tokens are issued by the main Gaia app: [gaia-ia/gaia-app-front](https://github.com/gaia-ia/gaia-app-front).

The template app receives the token as a `?token=` URL query parameter — the Gaia app redirects the user to your app's URL after login with the token appended. This means **a running instance of `gaia-app-front`** (local or deployed) must be configured to redirect to this app's URL for the login flow to work.

Without a valid token in the URL or localStorage, the `ProtectedRoute` guard will redirect the user back to the Gaia app login page.

---

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_API_URL` | Base URL of the backend API this app consumes |
| `VITE_GAIA_APP_URL` | URL of the main Gaia app (used for login/logout redirects) |
| `VITE_CRIA_APP_URL` | URL of the Cria app |
| `VITE_BRANDSYNC_APP_URL` | URL of the Brandsync app |
| `VITE_COPIA_APP_URL` | URL of the Copia app |
| `VITE_CVC_DASHBOARD_APP_URL` | URL of the CVC Dashboard app |
| `VITE_SENTRY_DSN` | Sentry DSN key for error reporting |
| `VITE_IS_SENTRY_ENABLED` | Set to `true` to enable Sentry (default: `false`) |

All variables are validated at startup using a Zod schema in [src/utils/env/](src/utils/env/).

### Sentry

The template includes Sentry integration but it is **disabled by default**. To enable it, contact a responsible developer — they will configure the Sentry project for your app and provide the DSN key. Once you have it:

1. Set `VITE_SENTRY_DSN=<your-dsn>` in `.env`
2. Set `VITE_IS_SENTRY_ENABLED=true`

---

## Available Scripts

| Script | Description |
|---|---|
| `pnpm start` | Start dev server on port 3002 |
| `pnpm build` | Type-check + production build |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | Run Biome lint + ESLint on `src/` |
| `pnpm format` | Auto-format `src/` with Biome |
| `pnpm check` | Biome lint + format in one pass |
| `pnpm storybook` | Start Storybook on port 6006 |
| `pnpm build-storybook` | Build a static Storybook |

---

## Project Structure

```
src/
├── api/                  # API endpoint definitions per feature
│   ├── auth/             # Login, forgot password, reset password
│   └── users/            # Current user info
├── assets/
│   ├── icons/            # SVG icons and logos
│   └── illustrations/    # SVG illustrations
├── components/
│   └── general/
│       └── Sidebar/      # Main sidebar (collapsible, language switcher)
├── hooks/
│   └── useFetch/         # useQueryFetch and useMutationFetch
├── libs/
│   ├── axios/            # Configured Axios instance
│   └── react-query/      # QueryClient setup
├── pages/
│   ├── Homepage/         # Example protected page
│   └── _layout/
│       └── AppLayout/    # Layout wrapper (Sidebar + outlet)
├── providers/
│   ├── ReactQueryProvider/
│   ├── ThemeProvider/    # Light/dark theme context
│   ├── ToastProvider/    # Toast notification context
│   └── UserDataProvider/ # Auth state and user data
├── translation/
│   ├── en/translation.json
│   ├── es/translation.json
│   └── pt/translation.json
├── types/
│   └── users/            # TUserInfo, TUserDetail, TRole
├── utils/
│   ├── ProtectedRoute/   # Route guard component
│   └── env/              # Zod env schema validation
├── App.tsx               # Root component with all providers
├── Routes.tsx            # Route definitions
├── i18n.tsx              # i18next configuration
├── bootstrap.ts          # Token extraction from URL on load
└── index.tsx             # Entry point with Sentry init
```

---

## Path Aliases

All aliases are configured in both [vite.config.ts](vite.config.ts) and [tsconfig.json](tsconfig.json).

| Alias | Resolves to |
|---|---|
| `@api` | `src/api` |
| `@assets` | `src/assets` |
| `@components` | `src/components` |
| `@hooks` | `src/hooks` |
| `@libs` | `src/libs` |
| `@pages` | `src/pages` |
| `@providers` | `src/providers` |
| `@translation` | `src/translation` |
| `@types` | `src/types` |
| `@utils` | `src/utils` |

---

## Core Patterns

### Authentication

The app uses a token-based auth flow:

1. On load, [src/bootstrap.ts](src/bootstrap.ts) reads `?token=` from the URL and saves it to `localStorage`
2. The Axios instance reads the token from `localStorage` and sends it as `Authorization: Bearer <token>` on every request
3. `UserDataProvider` exposes `{ loggedIn, user, loading, logout }` via context
4. Calling `logout()` clears the token and redirects to `${VITE_GAIA_APP_URL}/logout`

### Adding a Protected Page

1. Create the page folder and component:

```
src/pages/MyPage/
├── index.tsx
└── MyPage.module.css
```

2. Export it from the folder's `index.ts` barrel file.

3. Add the route in [src/Routes.tsx](src/Routes.tsx):

```tsx
<Route
  path="/my-page"
  element={
    <ProtectedRoute>
      <AppLayout>
        <MyPage />
      </AppLayout>
    </ProtectedRoute>
  }
/>
```

To restrict access by role, pass the `roleOnly` prop:

```tsx
<ProtectedRoute roleOnly={['admin', 'manager']}>
```

Available roles: `'admin'`, `'manager'`, `'franchisee'` (see [src/types/users/](src/types/users/)).

### Making API Calls

Use the hooks from [src/hooks/useFetch/](src/hooks/useFetch/):

**GET request:**

```tsx
import { useQueryFetch } from '@hooks/useFetch';

const { data, isLoading } = useQueryFetch<TMyResponse>({
  endpoint: '/my-resource',
  token: user.token,
});
```

**Mutation (POST / PUT / DELETE / PATCH):**

```tsx
import { useMutationFetch } from '@hooks/useFetch';

const { mutate, isPending } = useMutationFetch<TMyResponse, TMyBody>({
  endpoint: '/my-resource',
  method: 'POST',
  token: user.token,
});

mutate({ name: 'example' });
```

### Internationalization

1. Add translation keys to all three language files:

```
src/translation/en/translation.json
src/translation/es/translation.json
src/translation/pt/translation.json
```

2. Use the `useTranslation` hook in your component:

```tsx
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();

return <h1>{t('my.key')}</h1>;
```

The active language is stored in `localStorage` and can be changed via the Sidebar language picker.

### Theming

```tsx
import { useTheme } from '@providers/ThemeProvider';

const { theme, toggleTheme } = useTheme();
// theme: 'light' | 'dark'
```

The selected theme is persisted in `localStorage` automatically.

---

## CI/CD Setup

### Linter (works out of the box)

The [.github/workflows/linter.yml](.github/workflows/linter.yml) workflow runs automatically on every PR targeting `main` or `qa`. It runs:

- Biome lint + format check
- ESLint (with TanStack Query rules)
- TypeScript type check (`tsc --noEmit`)

No additional configuration is needed.

### Deploy to QA and Production

The deploy workflows ([deploy-qa.yml](.github/workflows/deploy-qa.yml) and [deploy-prod.yml](.github/workflows/deploy-prod.yml)) have the GCP deployment steps **commented out by default**. To activate them:

1. **Uncomment the GCP deploy steps** in both workflow files.

2. **Add the required secrets** in your GitHub repository under **Settings → Secrets and variables → Actions**:

   | Secret | Description |
   |---|---|
   | `GCP_SA_KEY` | GCP service account JSON key for deployment |
   | `VITE_API_URL` | API URL for the target environment |
   | Any other `VITE_*` vars | All env vars needed at build time |

   > Contact a responsible developer to obtain the correct secret values for each environment.

3. **Configure branch protection rules** in GitHub for `qa` and `main` if not already set.

### Version bumping (production only)

The production deploy workflow automatically bumps the package version based on the merged PR title:

| PR title prefix | Version bump |
|---|---|
| `feat!:` | Major |
| `feat:` | Minor |
| Anything else | Patch |

---

## Code Quality

The project uses [Biome](https://biomejs.dev/) for linting and formatting with the following enforced rules:

- No `console` statements
- No unused variables
- No JSX string literals (use translation keys instead)
- 2-space indentation
- 80-character line width
- Single quotes
- Semicolons always
- ES5 trailing commas
- Organized imports: Node built-ins → external packages → internal aliases
