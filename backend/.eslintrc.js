module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2021: true
    },
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 12
    },
    rules: {
        'no-console': 1,
        'no-lonely-if': 1,
        'no-unused-vars': 1,
        'no-trailing-spaces': 1,
        'no-multi-spaces': 1,
        'no-multiple-empty-lines': 1,
        'space-before-blocks': ['error', 'always'],
        'object-curly-spacing': [1, 'always'],
        'indent': ['warn', 4],
        'quotes': ['error', 'single'],
        'array-bracket-spacing': 1,
        'linebreak-style': 0,
        'no-unexpected-multiline': 'warn',
        'keyword-spacing': 1,
        'comma-dangle': 1,
        'comma-spacing': 1,
        'arrow-spacing': 1
    }
};
  