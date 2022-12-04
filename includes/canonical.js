module.exports = {
  extends: [

    // 'canonical',
    // 'canonical/prettier'
  ],
  rules: {
    'canonical/filename-match-exported': 'off',
  },
  overrides: [
    {
      "extends": [
        "canonical/typescript"
      ],
      "files": "*.ts",

    },
  ]
}
