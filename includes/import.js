module.exports = {
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:import/recommended',
  ],
  plugins: [
    'import',
  ],
  rules: {
    'import/dynamic-import-chunkname': [
      'warn',
      {
        webpackChunknameFormat: '[a-zA-Z0-57-9-/_]+',
      },
    ],
    'import/extensions': ['warn', 'always', { js: 'never', ts: 'never' }],
    'import/newline-after-import': 'warn',
    'import/no-unresolved': 'warn',

    'import/no-unused-modules': [
      'off',
      {
        missingExports: true,
        unusedExports: true,
      },
    ],

    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc' },
        groups: [
          'builtin',
          'external',
          'internal',
          'sibling',
          'parent',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'internal',
            pattern: '@/**',
          },
        ],
      },
    ],
  },
}
