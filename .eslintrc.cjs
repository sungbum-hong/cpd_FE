/** @type {import("eslint").Linter.Config} */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
    ],

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: ['react', 'react-hooks', 'local-rules'],

    rules: {
        'react/react-in-jsx-scope': 'off',

        'no-unused-vars': 'warn',

        'no-console': 'off',

        'react/prop-types': 'off',
        'local-rules/naming-rule': 'error',
        'id-match': [
            'error',
            '^[a-z][a-zA-Z0-9]*$|^[A-Z][A-Z0-9_]*$|^[A-Z][a-zA-Z0-9]*$',
            {
                onlyDeclarations: true,
                ignoreDestructuring: false,
            },
        ],
    },
};
