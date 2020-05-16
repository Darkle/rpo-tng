/* eslint-disable functional/no-expression-statement,functional/immutable-data, @typescript-eslint/no-magic-numbers, @typescript-eslint/no-var-requires, no-useless-escape */

const path = require('path')

const ISDEV = process.env.NODE_ENV !== 'production'
//https://regex101.com/r/KHHEf7/1
const regexForRegularJsModules = "^\.\/(.+?)$"
// https://regex101.com/r/C5Ja4s/1
const regexForWebModules = "^(?!\.\/)(.+?)$"
const webModulesDir = path.join(__dirname, 'src', 'web_modules')

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
    ['transform-rename-import', {
      replacements: [
        { original: regexForRegularJsModules, replacement: ISDEV ? './$1.js' : `./$1_${process.env.CACHE_BUST_STRING}.js` },
      ]
    }],
    ['snowpack/assets/babel-plugin.js', {
      webModulesDir
    }],
  ]
}
