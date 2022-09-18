// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint', 'prettier', 'graphql'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'prettier/prettier': 2,
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
            },
        ],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-var-requires': 'warn',
        'graphql/template-strings': [
            'error',
            {
                env: 'relay',
                schemaJsonFilepath: path.join(
                    __dirname,
                    'src',
                    'types',
                    '__generated__',
                    'schema.json'
                ),
                tagName: 'graphql',
            },
        ],
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
        'mdx/code-blocks': true,
    },
    env: {
        node: true,
    },
    overrides: [
        {
            files: ['*.mdx'],
            extends: ['plugin:mdx/recommended', 'plugin:mdx/overrides'],
        },
    ],
    ignorePatterns: ['node_modules', '.cache', 'public', '.hygen'],
};
