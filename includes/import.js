module.exports = {

    overrides: [
        {
            files: ['*.vue', '*.js', '*.ts'],
            extends: [
                'plugin:import/recommended',
                'plugin:import/typescript',
            ],
            plugins: [
                'import',
            ],
            rules: {
                "import/no-unresolved": "error",
                'import/no-unused-modules': [
                    'warn',
                    {
                        missingExports: true,
                        unusedExports: true,
                    },
                ],
                //
                // 'import/dynamic-import-chunkname': [
                //   'warn',
                //   {
                //     webpackChunknameFormat: '[a-zA-Z0-57-9-/_]+',
                //   },
                // ],
                // 'import/extensions': ['warn', 'always', { js: 'never', ts: 'never' }],
                // 'import/newline-after-import': 'warn',
                //
                // 'import/no-unused-modules': [
                //   'off',
                //   {
                //     missingExports: true,
                //     unusedExports: true,
                //   },
                // ],
                //
                // 'import/order': [
                //   'warn',
                //   {
                //     alphabetize: { order: 'asc' },
                //     groups: [
                //       'builtin',
                //       'external',
                //       'internal',
                //       'sibling',
                //       'parent',
                //       'index',
                //       'object',
                //       'type',
                //     ],
                //     'newlines-between': 'always',
                //     pathGroups: [
                //       {
                //         group: 'internal',
                //         pattern: '@/**',
                //       },
                //     ],
                //   },
                // ],

            },
        },
        {
            files: '*.vue',
            rules: {
                'import/no-unused-modules': [
                    'error',
                    {
                        missingExports: false,
                        unusedExports: true,
                    },
                ],
            }
        }
    ],
    settings: {
        "import/extensions": [
            ".js",
            ".ts"
        ],
        'import/internal-regex': '^@/',
        'import/resolver': {
            // alias: {
            //   map: [['@', '..']],
            //   extensions: ['.ts', '.js'],
            // },
            typescript: true,
            node: true
        },
    },
}
