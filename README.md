# Gaia React TypeScript Template

## Introduction

Welcome to the **Gaia React TypeScript Template**! This boilerplate is designed to help you quickly set up a modern, scalable React application with TypeScript. It includes essential tools, best practices, and configurations to streamline your development process.

- [Features](#features)
- [Getting Started](#getting-started)
  - [1. Create a New Repository from This Template](#1-create-a-new-repository-from-this-template)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Start the Development Server](#3-start-the-development-server)
  - [4. Build for Production](#4-build-for-production)
- [Project Structure](#project-structure)
- [API Structure](#api-structure)
  - [Example: `advice/index.tsx`](#example-adviceindextsx)
- [Components Structure](#components-structure)
  - [Example Structure](#example-structure)
  - [Component Folder Structure](#component-folder-structure)
  - [`components/index.ts`](#componentsindexts)
- [Hooks Structure](#hooks-structure)
  - [Example Structure](#example-structure-1)
  - [Example Hook: `useFetch`](#example-hook-usefetch)
  - [`hooks/index.tsx`](#hooksindextsx)
  - [Example](#example)
- [Libs Structure](#libs-structure)
  - [Example Structure](#example-structure-2)
  - [Example: `libs/react-query/index.tsx`](#example-libsreact-queryindextsx)
  - [How It Works](#how-it-works)
- [Pages Structure](#pages-structure)
  - [Example Structure](#example-structure-3)
  - [Routing Management](#routing-management)
    - [Example: `Routes.tsx`](#example-routestsx)
    - [Example: `pages/Login/index.tsx`](#example-pagesloginindextsx)
- [Providers Structure](#providers-structure)
  - [Example Structure](#example-structure-4)
  - [Example: `ReactQueryProvider/index.tsx`](#example-reactqueryproviderindextsx)
  - [Example: `providers/index.tsx`](#example-providersindextsx)
  - [Example: `App.tsx` with `CoreProvider`](#example-apptsx-with-coreprovider)
- [Translation Structure](#translation-structure)
  - [Example Structure](#example-structure-5)
  - [Configuration: `i18n.tsx`](#configuration-i18ntsx)
  - [Adding More Languages](#adding-more-languages)
- [Utils Structure](#utils-structure)
  - [Example Structure](#example-structure-6)
  - [Example: `utils/env/index.tsx`](#example-utilsenvindextsx)
  - [How It Works](#how-it-works-1)
- [Prettier Configuration in VSCode](#prettier-configuration-in-vscode)
  - [Step 1: Install the Prettier Extension](#step-1-install-the-prettier-extension)
  - [Step 2: Update User Settings](#step-2-update-user-settings)
  - [Step 3: Restart VSCode](#step-3-restart-vscode)
- [General Information](#general-information)
  - [Naming Conventions](#naming-conventions)
  - [Best Practices](#best-practices)

## Features

- **React 19** – Build interactive and efficient UIs with the latest version of React.
- **TypeScript** – Enhance code quality and maintainability with static typing.
- **React Router** – Manage navigation seamlessly using `react-router-dom`.
- **React Query** – Handle data fetching and caching efficiently with `@tanstack/react-query`.
- **React Hook Form** – Simplify form handling and validation.
- **Zod** – Schema validation for robust TypeScript applications.
- **i18next** – Easily add internationalization support.
- **ESLint & Prettier** – Maintain clean and consistent code formatting.
- **Storybook** – Develop UI components in isolation.
- **Jest & React Testing Library** – Set up unit and integration testing.
- **Axios** – Make API requests seamlessly.

## Getting Started

### 1. Create a New Repository from This Template

This is a **private template repository**, so you can create a new repository from it using GitHub:

1. Go to the repository on GitHub.
2. Click **"Use this template"** in the top-right corner.
3. Select **"Create a new repository"**.
4. Enter your repository details (name, description, visibility, etc.).
5. Click **"Create repository"**.

Once your repository is created, you can clone it and start working.

Alternatively, you can manually clone and set up a new repository:

```sh
# Clone the repository
git clone https://github.com/gaia-ia/gaia-react-ts-template.git my-new-project

# Navigate into the project folder
cd my-new-project

# Remove the existing Git history
rm -rf .git

# Initialize a new Git repository
git init

# Add all files to the new repository
git add .

# Commit the initial files
git commit -m "Initial commit from Gaia React TS Template"

# Set up a new remote repository (replace with your repo URL)
git remote add origin <your-repository-url>

# Push to your repository
git push -u origin main
```

### 2. Install Dependencies

Once your repository is set up, install the required dependencies:

```sh
yarn
```

### 3. Start the Development Server

Run the following command to launch the development server:

```sh
yarn start
```

This starts a local server and opens your application in the browser.

### 4. Build for Production

To generate an optimized production build, run:

```sh
yarn build
```

This creates a `build/` folder with compiled files ready for deployment.

---

You're now ready to start developing with the **Gaia React TypeScript Template**! 🚀

## Project Structure

This template is organized following a modular and scalable architecture to enhance maintainability and reusability:

```
src/
├── App.tsx
├── Routes.tsx
├── api/                  # API request handlers
│   └── advice/
│       └── index.tsx
├── assets/               # Static assets (images, icons, etc.)
│   ├── icons/
│   │   ├── index.ts
│   │   └── logos/
│   │       └── SquareLogo.tsx
│   └── images/
│       └── labyrinth.jpg
├── components/           # Reusable UI components
│   ├── buttons/
│   ├── general/
│   ├── inputs/
│   ├── typography/
│   ├── index.ts
├── hooks/                # Custom React hooks
│   ├── index.tsx
│   └── useFetch/
├── i18n.tsx              # Internationalization setup
├── index.css             # Global styles
├── index.tsx             # Application entry point
├── libs/                 # Third-party library configurations
│   ├── axios/
│   └── react-query/
├── pages/                # Page components mapped to routes
│   ├── Homepage/
│   ├── Login/
│   │   ├── components/
│   │   │   ├── LoginForm/
│   │   ├── pages/
│   │   │   ├── SignUp/
│   │   │   ├── PasswordReset/
│   │   ├── index.tsx
│   │   ├── styles.module.css
├── providers/            # Context providers for state management
│   ├── ReactQueryProvider/
│   ├── ThemeProvider/
│   └── index.tsx
├── translation/          # Localization files
│   ├── en/
│   ├── es/
│   └── pt/
└── utils/                # General utility functions
    ├── ProtectedRoute/
    └── env/
```

## API Structure

Each folder inside `api/` represents a group of API requests. These requests are handled using `react-query` and `axios` to simplify data fetching and caching.

### Example: `advice/index.tsx`

```ts
import { useFetch } from '@hooks';

type TAdvice = {
  slip: {
    id: number;
    advice: string;
  };
};

export const useGetAdvice = () => useFetch<TAdvice>(['advice'], '/advice');
```

## Components Structure

The `components/` folder organizes reusable UI components into logical groups. Each group is a folder that contains specific components.

### Example Structure

```
components/
├── buttons/
│   ├── Button/
│   │   ├── index.tsx
│   │   ├── styles.module.css
│   │   ├── types.ts
│   │   └── index.stories.tsx
│   └── ButtonLink/
│       ├── index.tsx
│       ├── styles.module.css
│       ├── types.ts
│       └── index.stories.tsx
├── general/
├── inputs/
├── typography/
├── index.ts
```

### Component Folder Structure

Each component inside a group has its own folder containing:

- `index.tsx`: The component implementation.
- `styles.module.css`: The component-specific styles.
- `types.ts`: Type definitions for the component props.
- `index.stories.tsx`: Storybook configuration for UI testing and previewing.

### `components/index.ts`

This file exports all components for better organization and ease of import across the project. Instead of importing components individually, you can use:

```ts
import { Button, ButtonLink } from '@components';
```

## Hooks Structure

The `hooks/` folder contains reusable custom React hooks. Each hook is stored in its own folder, named in **camelCase** and always prefixed with `use` to follow React conventions.

### Example Structure

```
hooks/
├── index.tsx
├── useFetch/
│   ├── index.tsx
```

### Example Hook: `useFetch`

```ts
import { api } from '@libs/axios';
import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query';

export function useFetch<TData>(
  queryKey: string[],
  endpoint: string,
  options?: Omit<UseQueryOptions<TData, Error>, 'queryKey' | 'queryFn'>
): UseQueryResult<TData> {
  return useQuery<TData>({
    queryKey,
    queryFn: async () => {
      const res = await api.get<TData>(endpoint);
      return res.data;
    },
    ...options,
  });
}

export default useFetch;
```

### `hooks/index.tsx`

The `index.tsx` file inside the `hooks/` folder acts as a central export file to keep imports clean and organized.

#### Example:

```ts
export { default as useFetch } from './useFetch';
export { default as useAuth } from './useAuth';
```

Instead of importing hooks individually, you can import them more efficiently:

```ts
import { useAuth, useFetch } from '@hooks';
```

## Libs Structure

The `libs/` folder contains configurations for third-party libraries used within the project. Each library has its own folder, named in **kebab-case**, containing an `index.tsx` file that manages its configuration.

### Example Structure

```
libs/
├── axios/
│   ├── index.tsx
├── react-query/
│   ├── index.tsx
```

### Example: `libs/react-query/index.tsx`

```ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();
```

### How It Works

- **Each library is encapsulated within its own folder**, making configurations modular and easy to manage.
- **Consistent kebab-case naming** keeps folder names uniform.
- **Encapsulated configurations** ensure that global setups, such as query clients or axios instances, are centralized.

### Pages Structure

The `pages/` directory contains the application's main views. Each page follows the **PascalCase** convention and resides in its dedicated folder, typically containing:

- `index.tsx` – The main page component.
- `styles.module.css` – Page-specific styles.

### Example Structure

```
pages/
├── Login/
│   ├── components/
│   │   ├── LoginForm/
│   ├── pages/
│   │   ├── SignUp/
│   │   ├── PasswordReset/
│   ├── index.tsx
│   ├── styles.module.css
```

### Routing Management

Application routes are managed in `Routes.tsx`. When a page has child pages, its routing logic is handled within the page's `index.tsx`.

#### Example: `Routes.tsx`

```tsx
import Homepage from '@pages/Homepage';
import Login from '@pages/Login';
import ProtectedRoute from '@utils/ProtectedRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  const protectedRoutes = [
    {
      path: '/',
      element: <Homepage />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {protectedRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={<ProtectedRoute>{route.element}</ProtectedRoute>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
```

#### Example: `pages/Login/index.tsx`

```tsx
<Routes>
  <Route path="/" element={<LoginPage />} />
  <Route path="signup" element={<SignUp />} />
  <Route path="forgot" element={<PasswordReset />} />
</Routes>
```

## Providers Structure

The `providers/` folder is used to manage application-wide state and context providers. Each provider is stored in its own folder, named in **PascalCase**, containing:

- `index.tsx`: The provider component configuration.

Additionally, the `providers/index.tsx` file acts as a **Core Provider**, wrapping all necessary providers together to keep `App.tsx` clean and organized.

### Example Structure

```
providers/
├── ReactQueryProvider/
│   ├── index.tsx
├── ThemeProvider/
│   ├── index.tsx
├── index.tsx
```

### Example: `ReactQueryProvider/index.tsx`

```tsx
import { queryClient } from '@libs/react-query';
import { QueryClientProvider } from '@tanstack/react-query';

type Props = {
  children: React.ReactNode;
};

const ReactQueryProvider: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
```

### Example: `providers/index.tsx`

```tsx
import ReactQueryProvider from './ReactQueryProvider';
import ThemeProvider from './ThemeProvider';

type Props = {
  children: React.ReactNode;
};

const CoreProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ThemeProvider>
  );
};

export default CoreProvider;
```

### Example: `App.tsx` with `CoreProvider`

```tsx
import { Header } from '@components';
import CoreProvider from '@providers';

import Routes from './Routes';
import './i18n';

const App = () => (
  <CoreProvider>
    <Header />
    <Routes />
  </CoreProvider>
);

export default App;
```

## Translation Structure

The `translation/` folder handles the application's internationalization. Each language has its own folder, named using its respective language code (`en/`, `es/`, `pt/`), and contains a `translation.json` file with the translated strings.

### Example Structure

```
translation/
├── en/
│   ├── translation.json
├── es/
│   ├── translation.json
├── pt/
│   ├── translation.json
```

### Configuration: `i18n.tsx`

```tsx
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './translation/en/translation.json';
import translationES from './translation/es/translation.json';
import translationPT from './translation/pt/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    es: {
      translation: translationES,
    },
    pt: {
      translation: translationPT,
    },
  },
  lng: localStorage.getItem('i18nextLng') || 'en',
  fallbackLng: localStorage.getItem('i18nextLng') || 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
```

### Adding More Languages

To add a new language:

1. Create a new folder inside `translation/` with the appropriate language code (e.g., `fr/` for French).
2. Add a `translation.json` file inside the new folder.
3. Update the `resources` key in `i18n.tsx` to include the new language.

## Utils Structure

The `utils/` folder contains helper functions and utility configurations that are used across the application. Each utility has its own folder, containing an `index.tsx` file where its logic is implemented.

### Example Structure

```
utils/
├── ProtectedRoute/
│   ├── index.tsx
├── env/
│   ├── index.tsx
```

### Example: `utils/env/index.tsx`

```tsx
import { z } from 'zod';

export const envSchema = z.object({
  REACT_APP_API_URL: z.string(),
});

export const env = envSchema.parse(process.env);
```

### How It Works

- **Each utility is encapsulated in its own folder**, making it modular and reusable.
- **New utilities can be easily added by creating a new folder in `utils/` and defining their logic inside an `index.tsx` file.**

## Prettier Configuration in VSCode

To ensure consistent code formatting, configure **Prettier** in VSCode by following these steps:

### Step 1: Install the Prettier Extension

Install **Prettier - Code formatter** from the VSCode Marketplace:
[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Step 2: Update User Settings

1. Open the **Command Palette** (`Cmd + Shift + P` on macOS, `Ctrl + Shift + P` on Windows/Linux).
2. Search for `Preferences: Open User Settings (JSON)` and select it.
3. Add or update the following configuration:

```json
{
  // Other existing settings
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnPaste": true
}
```

### Step 3: Restart VSCode

Restart VSCode to apply the changes. Prettier will now automatically format your code on save and paste, ensuring consistent styling throughout the project.

## General Information

### Naming Conventions

- **Folders**: Generally use **kebab-case** (e.g., `api/`, `libs/`, `utils/`).
- **Hooks**: Use **camelCase**, always prefixed with `use` (e.g., `useFetch/`).
- **Components & Pages**: Use **PascalCase** (e.g., `LoginForm/`, `Homepage/`).
- **CSS Files**: Named as `styles.module.css` or `anything.module.css`.
- **Stories**: Located inside each component folder, named `index.stories.tsx`.

### Best Practices

- **CSS Classes**: Written in **snake_case** for consistency.
- **Semicolons**: Always use semicolons (`;`) at the end of statements.
- **File Endings**: Always include an empty line at the end of files.
- **Avoid Literal Strings in JSX**: Always use `i18n` translation files instead of hardcoded strings.
- **No Unused Variables**: Always remove unused variables to keep the code clean.
- **Environment Variables**: Always define env variables inside the `env` config file and import them with `zod` validation.
