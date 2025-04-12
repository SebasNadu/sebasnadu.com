import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
  }),
  {
    // Configuración global
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "public/**",
      "*.config.js",
      "*.config.mjs",
    ],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
    },
  },
  {
    // Reglas para archivos JavaScript/TypeScript
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "check-file": require("eslint-plugin-check-file"),
      import: require("eslint-plugin-import"),
      "jsx-a11y": require("eslint-plugin-jsx-a11y"),
      prettier: require("eslint-plugin-prettier"),
      "react-hooks": require("eslint-plugin-react-hooks"),
      sonarjs: require("eslint-plugin-sonarjs"),
      unicorn: require("eslint-plugin-unicorn"),
      tailwindcss: require("eslint-plugin-tailwindcss"),
    },
    rules: {
      // Prettier
      "prettier/prettier": "error",

      // Import
      "import/order": "off", // it's handled by prettier
      "import/first": "error",
      "import/no-duplicates": "error",
      "import/no-unresolved": "off", // it's handled by typeScript

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // File structure and naming
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.{jsx,tsx}": "PASCAL_CASE",
          "**/*.{js,ts}": "CAMEL_CASE",
          "**/*.d.ts": "CAMEL_CASE",
          "**/*.test.{js,jsx,ts,tsx}": "CAMEL_CASE",
          "**/*.spec.{js,jsx,ts,tsx}": "CAMEL_CASE",
        },
        { ignoreMiddleExtensions: true },
      ],

      // SonarJS
      "sonarjs/cognitive-complexity": "warn",
      "sonarjs/no-duplicate-string": ["warn", { threshold: 3 }],
      "sonarjs/no-identical-functions": "warn",

      // Unicorn
      "unicorn/prevent-abbreviations": "off",
      "unicorn/no-null": "off",
      "unicorn/filename-case": "off", // it's handled by check-file
      "unicorn/consistent-function-scoping": "warn",
      "unicorn/no-nested-ternary": "error",

      // Accessibility
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/aria-role": "error",

      // General Good practices
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      "no-unused-vars": "off", // it's handled by TypeScript
      "prefer-const": "error",
      "no-var": "error",
    },
  },
  {
    // Configuration React Component
    files: [
      "**/components/**/*.{jsx,tsx}",
      "**/pages/**/*.{jsx,tsx}",
      "**/app/**/*.{jsx,tsx}",
    ],
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  {
    // Configuration custom hooks
    files: ["**/hooks/**/*.{js,ts}"],
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];

export default eslintConfig;
