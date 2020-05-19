



Example of the data you get back for an image from the reddit json api: https://gist.github.com/Darkle/377a8e5f3bb155885d26a0a293806af3

##### Build Setup:

* Using [Typescript](https://www.typescriptlang.org/)
    * We run `tsc` with with `noEmit: true` in dev & build mode to enable checking for typescript errors without emitting JS files. Babel does the conversion of Typescript to JS.
    * Typescript gets its types for the library imports from the `node_modules` folder.
        * There is apparently [a way to get it to get the types from the `web_modules` directory](https://www.pika.dev/npm/snowpack/discuss/161), but it didnt seem to work in my experience, it just got the types from the `node_modules` directory.
* Using [Babel](https://babeljs.io/) to transpile Typescript to JS so we can use the `transform-rename-import` plugin for cache busting.
* [Snowpack](https://www.snowpack.dev/) - for npm modules.
    * For the imports for libraries we use `import { html, render } from 'lit-html'` rather than importing from the `web_modules` folder. This is so that Typescript will work with the imports in terms of finding the types.

    * This means that each library we import needs to be specified in both the `webDependencies` and the `dependencies` in the package.json. So if you were using `lit-html`, it would be set in both `"snowpack": {"webDependencies": ["lit-html"]}` and also in `"dependencies": {"lit-html": "^1.2.1"}`. `webDependencies` is for snowpack and `dependencies` is for Typescript so it can find the library types.

    * The `babel.config.js` then re-writes the `import { html, render } from 'lit-html'` to use the `web_modules` folder.

* [Browser-Sync](https://browsersync.io/docs/command-line) - gives us a server, reload on change and also https as a few things require https (eg service worker)
* [babel-preset-minify](https://github.com/babel/minify) Is used to minify the JS for production in the babel.config.js.
* [foreach-cli](https://github.com/danielkalen/foreach-cli) & [csso](https://github.com/css/csso-cli) Is used to minify the css files for dist.
* [Ncp](https://github.com/AvianFlu/ncp) - copies css & asset files over to dist.
* [Ncat](https://github.com/pvdlg/ncat) - lets us concatinate all JS files together, which allows us to check the total app JS size with [bundlesize](https://github.com/siddharthkp/bundlesize) (although note that some of the `web_modules` are loaded using dynamic imports)
* The `lighthouse:serve` npm task is for Lighthouse as it needs the page to be served. The `lighthouse:kill-serve` kills this sever after the lighthouse task is completed.
* Note the [Lighthouse](https://github.com/GoogleChrome/lighthouse) test is missing the pwa test as it kept erroring out.
* Using https://go.fast.io/ for hosting. When deploy new build (dist) to github, it will import those changes automatically.

###### Cache Busting:

Since we are not using a bundler, we need to do cache-busting for JS manually.

1. In the `build` npm script, we set `CACHE_BUST_STRING=$(random string)` using [random-generator-cli](https://github.com/AmrSaber/random-cli).
2. The `build:babel` script uses `CACHE_BUST_STRING` to rename imports to inlcude the `CACHE_BUST_STRING` value using the [transform-rename-import](https://github.com/laat/babel-plugin-transform-rename-import) babel plugin.
3. The `build:rename-js-files` also uses the `CACHE_BUST_STRING` value to rename the JS files in the dist folder to include the `CACHE_BUST_STRING` value. It uses [Laren](https://github.com/devmetal/laren) to do this.
4. The `build:html-script-src-replace` script also uses the `CACHE_BUST_STRING` value internally (it is available via process.env.CACHE_BUST_STRING) to alter the html script src value to the new file name that includes the `CACHE_BUST_STRING` value. It uses [html-script-src-replace](https://gitlab.com/Darkle1/html-script-src-replace) to do this.

Note that the cache-bust string is just a random string. It doesn't represent the hash of the file.


##### Debugging:
* To debug the service worker, download chromium and start it with `./chrome --unsafely-treat-insecure-origin-as-secure=https://192.168.1.2:8888/ --ignore-certificate-errors `
    * https://www.chromium.org/blink/serviceworker/service-worker-faq
