



Example of the data you get back for an image from the reddit json api: https://gist.github.com/Darkle/377a8e5f3bb155885d26a0a293806af3

##### Build Setup:

* Using [Typescript](https://www.typescriptlang.org/)
* Using Babel to transpile Typescript to js so we can use the `transform-rename-import` plugin for cache busting.
* [Snowpack](https://www.snowpack.dev/) - for npm modules.
* [Browser-Sync](https://browsersync.io/docs/command-line) - gives us a server, reload on change and also https as that is needed for a few things (eg service worker)
* [Minify](https://github.com/tdewolff/minify/blob/master/cmd/minify/README.md) - is a go app. Using this for minifying as terser does not yet support optional chaining syntax.
* [Ncp](https://github.com/AvianFlu/ncp) - copies files over to dist
* [Ncat](https://github.com/pvdlg/ncat) - lets us concatinate all js files together, which allows us to check the total app js size with [bundlesize](https://github.com/siddharthkp/bundlesize) (although note that some of the `web_modules` are loaded using dynamic imports)
* The `lighthouse:serve` npm task is for Lighthouse as it needs the page to be served. The `lighthouse:kill-serve` kills this sever after the lighthouse task is completed.
* Note the [Lighthouse](https://github.com/GoogleChrome/lighthouse) test is missing the pwa test as it kept erroring out.
* Using https://go.fast.io/ for hosting. When deploy new build (dist) to github, it will import those changes automatically.

###### Cache Busting:

Since we are not using a bundler, we need to do cache-busting for js manually.

1. In the `build` npm script, we set `CACHE_BUST_STRING=$(random string)`.
2. The `build:babel` script uses this variable to rename imports to inlcude the `CACHE_BUST_STRING` value.
3. The `build:rename-js-files` also uses the `CACHE_BUST_STRING` value to rename the js files in the dist folder to include the `CACHE_BUST_STRING` value.
4. The `build:html-script-src-replace` script also uses the `CACHE_BUST_STRING` value internally (it is available via process.env.CACHE_BUST_STRING) to alter the html script src value to the new file name that includes the `CACHE_BUST_STRING` value.


##### Debugging:
* To debug the service worker, download chromium and start it with `./chrome --unsafely-treat-insecure-origin-as-secure=https://192.168.1.2:8888/ --ignore-certificate-errors `
    * https://www.chromium.org/blink/serviceworker/service-worker-faq
We run tsc --watch in dev mode and build with noEmit: true in the tsconfig.json to enable checking for typescript errors.