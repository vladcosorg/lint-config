module.exports = {
  "extends": "plugin:unicorn/recommended",
  "plugins": [
    "unicorn"
  ],
  overrides: [
    {
      files: '.eslintrc.js',
      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
  ]

}
