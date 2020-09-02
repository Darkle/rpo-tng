



Example of the data you get back for an image from the reddit json api: https://gist.github.com/Darkle/377a8e5f3bb155885d26a0a293806af3

##### Build Setup:

* [Browser-Sync](https://browsersync.io/docs/command-line) - gives us a server, reload on change and also https as a few things require https (eg service worker)
* The `lighthouse:serve` npm task is for Lighthouse as it needs the page to be served. The `lighthouse:kill-serve` kills this sever after the lighthouse task is completed.
* Note the [Lighthouse](https://github.com/GoogleChrome/lighthouse) test is missing the pwa test as it kept erroring out.
* Using https://go.fast.io/ for hosting. When deploy new build (dist) to github, it will import those changes automatically.

###### Cache Busting:

Since we are not using a bundler, we need to do cache-busting for JS manually.

1. In the `build` npm script, we set `CACHE_BUST_STRING=$(random string)` using [random-generator-cli](https://github.com/AmrSaber/random-cli).
2. The `build:rename-js-files` also uses the `CACHE_BUST_STRING` value to rename the JS files in the dist folder to include the `CACHE_BUST_STRING` value. It uses [Laren](https://github.com/devmetal/laren) to do this.
3. The `build:html-script-src-replace` script also uses the `CACHE_BUST_STRING` value internally (it is available via process.env.CACHE_BUST_STRING) to alter the html script src value to the new file name that includes the `CACHE_BUST_STRING` value. It uses [html-script-src-replace](https://gitlab.com/Darkle1/html-script-src-replace) to do this.

Note that the cache-bust string is just a random string. It doesn't represent the hash of the file.


##### Debugging:
* To debug the service worker, download chromium and start it with `./chrome --unsafely-treat-insecure-origin-as-secure=https://192.168.1.2:8888/ --ignore-certificate-errors `
    * https://www.chromium.org/blink/serviceworker/service-worker-faq
