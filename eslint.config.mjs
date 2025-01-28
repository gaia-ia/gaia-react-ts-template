import pluginJs from '@eslint/js';
import pluginReactQuery from '@tanstack/eslint-plugin-query';
import pluginStorybook from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    plugins: {
      '@tanstack/query': pluginReactQuery,
      'storybook/react': pluginStorybook,
    },
  },
  { files: ['**/*.{js,mjs,cjs,ts,tsx}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      eqeqeq: 'off',
      'no-unused-vars': 'error',
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
