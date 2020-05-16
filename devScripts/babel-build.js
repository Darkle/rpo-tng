/* eslint-disable @typescript-eslint/no-var-requires, functional/no-expression-statement, functional/immutable-data */
const crypto = require('crypto')
const execa = require('execa')

const randomBytesLength = 10
const cacheBustString = crypto.randomBytes(randomBytesLength).toString('hex')

process.env.NODE_ENV = 'production'
process.env.CACHE_BUST_STRING = cacheBustString

execa.command(`babel -x .ts,.tsx src/ts --out-dir src/ts --ignore "src/web_modules/**/*.*" --out-file-extension .${cacheBustString}.js`)
  .catch(err => console.error(err))

