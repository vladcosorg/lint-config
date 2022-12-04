module.exports = {
  extends: [
    "plugin:jsonc/recommended-with-jsonc",
    'plugin:json-schema-validator/recommended'
  ],
  overrides: [
    {
      files: ["*.json", "*.json5", "*.jsonc"],
      parser: "jsonc-eslint-parser",
    },
  ],
};
