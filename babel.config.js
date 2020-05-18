/* eslint-disable functional/no-expression-statement,functional/immutable-data, no-useless-escape */
const ISDEV = process.env.NODE_ENV !== 'production'

module.exports = {
  env: {
    production: {
      presets: ['minify']
    }
  },
  presets: [
    ['@babel/preset-env',
    {
      targets: 'last 3 Chrome version, Firefox ESR, last 1 safari version, last 3 ios version',
      modules: false
    }],
    '@babel/typescript'
  ],
  plugins: [
    [
      'inline-replace-variables',
      {
        ISDEV
      }
    ],
    ['transform-rename-import', {
      replacements: [
        // https://regex101.com/r/LnJpYa/1
        { original: '^(\.\/.+?|\.\.\/.+?)$', replacement: ISDEV ? '$1.js' : `$1_${process.env.CACHE_BUST_STRING}.js` },
      ]
    }],
    ['snowpack/assets/babel-plugin.js', {
      webModulesDir: ISDEV ? 'src/web_modules/' : 'dist/web_modules'
    }],
  ]
}
