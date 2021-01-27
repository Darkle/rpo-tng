// @ts-nocheck
/* eslint-disable functional/functional-parameters,
functional/no-expression-statement, quotes, import/no-extraneous-dependencies */
const fs = require('fs')

const { sh, cli } = require('tasksfile')
const { nanoid } = require('nanoid')

const cacheBustString = nanoid()

const prepareAndCleanDir = dir => {
  if (fs.existsSync(dir)) fs.rmdirSync(dir, { recursive: true })
  fs.mkdirSync(dir)
}
const devShellOptions = { env: { NODE_ENV: 'development' }, nopipe: true }

const dev = {
  sunpack() {
    sh(`sunpack --clean --output './src/vendor/js'`, devShellOptions)
  },
  start() {
    const esdevserver = `cd src && es-dev-server --app-index index.html --hostname '0.0.0.0' --compatibility none --http2 --watch --port 8081`
    const eslintWatch = `esw --watch './src/js/**/*.js' --report-unused-disable-directives`
    sh(`concurrently "${eslintWatch}" "${esdevserver}"`, devShellOptions)
  },
}

const buildShellOptions = { env: { NODE_ENV: 'production' }, nopipe: true }

const build = {
  npmaudit() {
    sh('npm audit --production', buildShellOptions)
  },
  eslint() {
    sh(
      `eslint './src/js/**/*.js' --quiet --rule 'no-console: \"error\"' --report-unused-disable-directives`,
      buildShellOptions
    )
  },
  lit() {
    sh(`lit-analyzer './src/**/*.js' --strict --rules.no-unknown-event error`, buildShellOptions)
  },
  copyToBuild() {
    prepareAndCleanDir('./front-build')
    sh(`ncp ./src "./front-build"`, buildShellOptions)
  },
  sunpack() {
    sh(`sunpack --clean --output './front-build/vendor/js' --optimize`, devShellOptions)
  },
  cachebustHTMLScriptSrc() {
    sh(
      `CACHE_BUST_STRING=${cacheBustString} html-script-src-replace --html-input-file './src/index.html' --html-output-file './front-build/index.html' `,
      buildShellOptions
    )
  },
  cachebustJSFiles() {
    sh(`laren "./front-build/js/**/*.js" "f => f.replace('.js', '${cacheBustString}.js')"`, buildShellOptions)
  },
  renameESImportsForCachebust() {
    sh(
      `foreach --glob "front-build/js/**/*.js" --execute "grasp 'import-dec.source[value~=/^((?!vendor).)*\.js/]' --replace '{{ | replace .js, ${cacheBustString}.js}}' --to '#{path}' #{path} "`,
      buildShellOptions
    )
  },
  minifyCSS() {
    sh(
      `foreach --glob "front-build/**/*.css" --execute "csso --input #{path} --output #{path}"`,
      buildShellOptions
    )
  },
  minifyJS() {
    sh(
      `foreach --glob "front-build/**/*.js" --execute "terser #{path} --compress --mangle --comments false --output #{path}"`,
      buildShellOptions
    )
  },
  bundlesize() {
    sh(`chalk blue bold 'Vendor Libs Size Check:'`, buildShellOptions)
    sh(`bundlesize -f 'front-build/vendor/js/**/*.js' -s 35kB`, buildShellOptions)
    sh(`ncat 'front-build/**/*.js' -o ./total-bundle.js > /dev/null`, buildShellOptions) // Concatenate all js to a single file
    sh(`chalk blue bold 'Total JS Size Check:'`, buildShellOptions)
    sh(`bundlesize -f ./total-bundle.js -s 70kB`, buildShellOptions)
    sh(`trash ./total-bundle.js`, buildShellOptions)
  },
  lighthouse() {
    sh(
      `cd src && es-dev-server --app-index index.html --compatibility none --http2 --port 8081 &`,
      buildShellOptions
    )
    sh(
      `lighthouse https://localhost:8081 --chrome-flags="--ignore-certificate-errors --no-sandbox --headless --disable-gpu" --output-path ./lighthouse-report.html`,
      buildShellOptions
    )
    sh(`open-cli ./lighthouse-report.html`) // `nopipe: true` seems to mess up xdg-open so not using buildShellOptions here
    sh(`delay 3 && trash ./lighthouse-report.html`, buildShellOptions)
    sh(`fkill :8081`, buildShellOptions)
  },
}

const buildAll = () => Object.keys(build).forEach(key => build[key]())

cli({
  dev,
  build,
  buildAll,
})
