import { FlatCompat } from "@eslint/eslintrc";
import playwright from "eslint-plugin-playwright";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname
});

const config = tseslint.config(
    ...compat.config({
        extends: ["next/core-web-vitals", "next/typescript"],
        rules: {
            "react/no-unescaped-entities": "off",
            "react/display-name": "off"
        }
    }),
    tseslint.configs.recommended,
    {
        languageOptions: {
            parserOptions: {
                project: true,
                projectService: {
                    allowDefaultProject: ["*.mjs"]
                }
            }
        }
    },
    {
        plugins: {
            playwright: playwright
        },
        files: ["e2e/**"]
    },
    {
        plugins: {
            "simple-import-sort": simpleImportSort
        },
        rules: {
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error"
        }
    },
    eslintPluginPrettierRecommended
);

export default config;
