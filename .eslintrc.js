// @ts-check
const { defineConfig } = require('eslint-define-config')
module.exports = defineConfig({
  root: true,
  extends: ['./eslint/index.js'],
  overrides: [
    {
      files: '*.js',
      rules: {
        'import/no-unused-modules': 'off',
        'unicorn/prefer-module': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/naming-convention': 'off',
      },
    },
  ],
})
