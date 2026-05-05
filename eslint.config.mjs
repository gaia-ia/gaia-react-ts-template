import pluginReactQuery from '@tanstack/eslint-plugin-query';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
    },
    plugins: { '@tanstack/query': pluginReactQuery },
    rules: pluginReactQuery.configs['flat/recommended'][0].rules,
  },
];
