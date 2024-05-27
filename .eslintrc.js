module.exports = {
    extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended", "prettier"],
    plugins: ["prettier", "simple-import-sort", "@typescript-eslint"],
    rules: {
        "prettier/prettier": [
            "error",
            {},
            {
                usePrettierrc: true
            }
        ],
        "react/no-unescaped-entities": "off",
        "react/display-name": "off",
        "@typescript-eslint/no-empty-function": 0,
        "@typescript-eslint/explicit-function-return-type": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error"
    },
    ignorePatterns: [".github", ".husky", "node_modules", "public", "build", "coverage", ".next"]
};
