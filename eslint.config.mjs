import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginCheckFile from 'eslint-plugin-check-file';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginSonarjs from 'eslint-plugin-sonarjs';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

const compat = new FlatCompat({
  baseDirectory: new URL('.', import.meta.url).pathname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
  }),
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'public/**', '*.config.js', '*.config.mjs'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'check-file': eslintPluginCheckFile,
      import: eslintPluginImport,
      'jsx-a11y': eslintPluginJsxA11y,
      prettier: eslintPluginPrettier,
      'react-hooks': eslintPluginReactHooks,
      sonarjs: eslintPluginSonarjs,
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      'prettier/prettier': 'error',

      'import/order': 'off',
      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/no-unresolved': 'off',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      'check-file/filename-naming-convention': [
        'error',
        {
          '**/*.{jsx,tsx}': 'KEBAB_CASE',
          '**/*.{js,ts}': 'KEBAB_CASE',
          '**/*.d.ts': 'KEBAB_CASE',
          '**/*.test.{js,jsx,ts,tsx}': 'KEBAB_CASE',
          '**/*.spec.{js,jsx,ts,tsx}': 'KEBAB_CASE',
        },
        { ignoreMiddleExtensions: true },
      ],

      'sonarjs/cognitive-complexity': 'warn',
      'sonarjs/no-duplicate-string': ['warn', { threshold: 3 }],
      'sonarjs/no-identical-functions': 'warn',

      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/consistent-function-scoping': 'warn',
      // 'unicorn/no-nested-ternary': 'error',

      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/aria-role': 'error',

      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      'no-unused-vars': 'off',
      'prefer-const': 'error',
      'no-var': 'error',

      'no-unsafe-function-type': 'off',
    },
  },
  {
    files: ['**/components/**/*.{jsx,tsx}', '**/pages/**/*.{jsx,tsx}', '**/app/**/*.{jsx,tsx}'],
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    files: ['**/hooks/**/*.{js,ts}'],
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
];

export default eslintConfig;
