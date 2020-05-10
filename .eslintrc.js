module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: true,
      impliedStrict: true,
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:functional/all',
  ],
  globals: {
  },
  env: {
    node: true,
    browser: true,
    es2020: true,
    webextensions: true,
    greasemonkey: true,
  },
  settings: {
  },
  plugins: [
    '@typescript-eslint',
    'functional',
    'lit',
  ],
  rules: {
    '@typescript-eslint/array-type': 'error',
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    // '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    // '@typescript-eslint/no-floating-promises': 'error',
    // '@typescript-eslint/no-implied-eval': 'error',
    // '@typescript-eslint/no-throw-literal': 'error',
    // '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    // '@typescript-eslint/prefer-readonly-parameter-types': 'error',
    // '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    // '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/semi': [
      'error',
      'never',
      {
        beforeStatementContinuationChars: 'always'
      }
    ],
    '@typescript-eslint/no-unused-vars': ['error', {'args': 'after-used', 'argsIgnorePattern': '_' }],
    '@typescript-eslint/no-use-before-define': ['error', { 'functions': false}],
    '@typescript-eslint/no-useless-constructor': 'error',
    'no-useless-computed-key': 'error',
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: true,
        ignore: [-2, -1, 0, 1, 2, 3]
      }
    ],
    'array-callback-return': 'error',
    'callback-return': 'error',
    'complexity': ['error', 4],
    'consistent-return': 'error',
    'eqeqeq': 'error',
    'functional/no-conditional-statement': 'off',
    'functional/no-expression-statement': 'off',
    'functional/functional-parameters': 'off',    
    'functional/immutable-data': ['error', {ignoreImmediateMutation: true}],    
    'functional/no-promise-reject': 'off',    
    'guard-for-in': 'error',
    'handle-callback-err': 'error',
    'lit/attribute-value-entities': 'error',
    'lit/binding-positions': 'error',
    'lit/no-duplicate-template-bindings': 'error',
    'lit/no-invalid-escape-sequences': 'error',
    'lit/no-invalid-html': 'error',
    'lit/no-legacy-template-syntax': 'error',
    'lit/no-private-properties': 'error',
    'lit/no-property-change-update': 'error',
    'lit/no-template-bind': 'error',
    'lit/no-useless-template-literals': 'error',
    'lit/no-value-attribute': 'error',
    'max-depth': ['error', 3],
    'max-lines-per-function': [
      'error',
      {
        max: 22,
        skipComments: true
      }
    ],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 4],
    'max-statements': ['error', 8],
    'max-statements-per-line': [
      'error',
      {
        max: 1
      }
    ],
    'no-alert': 'error',
    'no-await-in-loop': 'error',
    'no-buffer-constructor': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-lonely-if': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      }
    ],
    'no-unused-expressions': [
      'error',
      {
        allowTernary: true,
        allowTaggedTemplates: true,
        allowShortCircuit: true,
      }
    ],
    'no-multi-spaces': ['error', { ignoreEOLComments: false }],
    'no-new-require': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-path-concat': 'error',
    'no-plusplus': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-shadow': 'error',
    'no-self-compare': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'off',
    'no-undefined': 'error',
    'no-undef-init': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: true,
      }
    ],
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'beside'],
    'object-shorthand': 'error',
    'operator-assignment': ['error', 'never'],
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: false
      }
    ],
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      }
    ],
    'radix': 'error',
    'require-atomic-updates': 'error',
    'require-unicode-regexp': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-in-parens': ['error', 'never'],
    'symbol-description': 'error',
    'yoda': 'error',
    'wrap-iife': ['error', 'inside'],
  }
}