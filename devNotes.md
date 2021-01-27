#### Build Setup:

- Using [TasksFile](https://www.npmjs.com/package/tasksfile) instead of npm tasks
  - If you want to run an individual task from the group task, run `npx task build:eslint`
  - You can view all the tasks with `npx task --help`

###### Dev:

- Using [sunpack](https://www.npmjs.com/package/sunpack) converts or moves your npm `dependencies` from the node_modules directory to a directory you specify to make them usable in the browser
- Using [es-dev-server](https://www.npmjs.com/package/es-dev-server) for live reloading on the frontend
- Using [eslint-watch](https://www.npmjs.com/package/eslint-watch) to watch for eslint errors in the terminal
- Using [concurrently](https://www.npmjs.com/package/concurrently) to run both es-dev-server and eslint-watch together in the same terminal

###### Prod:

- Using [eslint](https://www.npmjs.com/package/eslint) to lint .js files
- Using [lit-analyzer](https://www.npmjs.com/package/lit-analyzer) to lint lit-html
- Using [ncp](https://www.npmjs.com/package/ncp) to copy all files from `./frontend` to `./front-build/`
- Using [sunpack](https://www.npmjs.com/package/sunpack) converts or moves your npm `dependencies` from the node_modules directory to a directory you specify to make them usable in the browser
- Using [html-script-src-replace](https://www.npmjs.com/package/html-script-src-replace) to update the &lt;script&gt; src value to the new cachebusted script name
- Using [laren](https://www.npmjs.com/package/laren) to rename js files to include a cachebusting string
- Using [foreach-cli](https://www.npmjs.com/package/foreach-cli) and [grasp](https://www.npmjs.com/package/grasp) to modify a js files AST to change its import source to include the new cachebusting string
- Using [foreach-cli](https://www.npmjs.com/package/foreach-cli) and [csso](https://www.npmjs.com/package/csso) to minify the .css files
- Using [foreach-cli](https://www.npmjs.com/package/foreach-cli) and [terser](https://www.npmjs.com/package/terser) to minify the .js files
- Using [chalk-cli](https://www.npmjs.com/package/chalk-cli) and [ncat](https://www.npmjs.com/package/ncat) and [bundlesize](https://www.npmjs.com/package/bundlesize) to check the size of the .js files. First we check the size of the vendor libraries, then we concatenate all the .js files together and check the size of all the js in total
- Using [lighthouse](https://www.npmjs.com/package/lighthouse) to check web metrics of the home page. We also use [fkill-cli](https://www.npmjs.com/package/fkill-cli) to kill the server we spun up for lighthouse

###### Cache Busting:

Since we are not using a bundler, we need to do cache-busting for JS manually.

1. In the TasksFile.js script, first we move the frontend files to the `front-build` folder
2. Then we use [nanoid](https://www.npmjs.com/package/nanoid) to create URL friendly random string
3. The `cachebustJSFiles` build task uses [Laren](https://www.npmjs.com/package/laren) to rename the .js files to include the cachebust string
4. The `renameESImportsForCachebust` build task uses [foreach-cli](https://www.npmjs.com/package/foreach-cli) and [grasp](https://www.npmjs.com/package/grasp) to modify a js files AST to change its import source to include the new cachebusting string
5. We use `html-script-src-replace` to update the &lt;script&gt; src value to the new cachebusted script name

Note that the cache-bust string is just a random string. It doesn't represent the hash of the file.

Example of the data you get back for an image from the reddit json api: https://gist.github.com/Darkle/377a8e5f3bb155885d26a0a293806af3
