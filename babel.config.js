/* eslint-disable functional/no-expression-statement,functional/immutable-data, @typescript-eslint/no-magic-numbers, @typescript-eslint/no-var-requires */

const ISDEV = process.env.NODE_ENV !== 'production'

module.exports = {
  presets: [
    ['@babel/preset-env',
    {
      targets: 'last 3 Chrome version, Firefox ESR, last 1 safari version, last 3 ios version',
      modules: false
    }],
    '@babel/typescript'
  ],
  plugins: [
    'babel-plugin-macros',
    [
      'inline-replace-variables',
      {
        ISDEV
      }
    ],
    ['transform-rename-import',
      {
        original: '^(.+?)$', replacement: ISDEV ? '$1.js' : `$1.${process.env.CACHE_BUST_STRING}.js`
      }
    ]
  ]
}