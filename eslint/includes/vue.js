module.exports = {
    overrides: [
        {
            files: ['*.vue', '*.js'],
            env: {
                'vue/setup-compiler-macros': true,
            },
            parser: 'vue-eslint-parser',
            extends: ['plugin:vue/vue3-recommended'],
            parserOptions: {
                extraFileExtensions: ['.vue'],
                parser: require.resolve('@typescript-eslint/parser'),
            },
            plugins: ['vue'],
            rules: {
                "no-unused-vars": "off",
            },
        },
    ]

}
