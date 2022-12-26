module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.js'],
      plugins: ['unused-imports'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            vars: 'all',
            varsIgnorePattern: '^_',
          },
        ],
      },
    },
  ],
}
