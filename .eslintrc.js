/* eslint-disable */
module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: true,
      impliedStrict: true,
    },
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'xo/esnext',
    'plugin:functional/recommended',
    'plugin:lit/all',
  ],
  globals: {},
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  settings: {},
  plugins: ['functional', 'lit', 'extra-rules'],
  rules: {
    'functional/no-expression-statement': ['error', { ignorePattern: ['html', 'console.log', 'render'] }],
    'functional/immutable-data': ['error', { ignoreImmediateMutation: true }],
    'extra-rules/potential-point-free': 'error',
    complexity: ['error', 4],
    'eol-last': 'off',
    'max-depth': ['error', 3],
    'max-lines-per-function': ['error', { max: 22, skipComments: true }],
    'max-params': ['error', 4],
    'no-console': 'off',
    'no-duplicate-imports': 'warn',
    'no-eq-null': 'error',
    semi: ['error', 'never'],
  },
}
