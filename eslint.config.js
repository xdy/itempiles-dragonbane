import js from "@eslint/js";
import prettierEslint from "eslint-config-prettier";
import * as importPlugin from "eslint-plugin-import-x";
import { includeIgnoreFile } from "@eslint/compat";

import * as path from "path";

export default [
  js.configs.recommended,
  prettierEslint,
  importPlugin.flatConfigs.recommended,
  includeIgnoreFile(path.resolve(import.meta.dirname, ".gitignore")),
  {
    ignores: [".yarn"],
    languageOptions: {
      ecmaVersion: "latest",
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
    },
    settings: {
    },
    rules: {
    },
  },
  {
    files: ["**/*.js"],
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off"
    },
  },
];
