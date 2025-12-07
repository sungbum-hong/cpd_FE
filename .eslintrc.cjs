/** @type {import("eslint").Linter.Config} */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "prettier", // prettier와 충돌하는 eslint 규칙 끔
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    settings: {
        react: {
            version: "detect", // React 19 자동 감지됨
        },
    },
    plugins: ["react", "react-hooks"],
    rules: {
        "react/react-in-jsx-scope": "off",

        "no-unused-vars": "warn",


        "no-console": "off",

        "react/prop-types": "off",
    },
};
