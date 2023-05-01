# thread-loader-4-ts-loader-reproduction
Using ts-loader 9.4.2 and thread-loader 4.0.1 causes an error.
This code is a reproduction for this problem. 

## Usage
Execute `npm run build` or `webpack --mode=development`.

This operation will output an error as follows:
```
asset main.bundle.js 2.32 KiB [compared for emit] (name: main)
./src/index.ts 39 bytes [built] [code generated] [1 error]

ERROR in ./src/index.ts
Module build failed (from ./node_modules/thread-loader/dist/cjs.js):
Thread Loader (Worker 0)
Cannot read properties of undefined (reading 'plugins')
    at PoolWorker.fromErrorObj (C:\...\thread-loader-4-ts-loader-reproduction\node_modules\thread-loader\dist\WorkerPool.js:302:12)
    at C:\...\thread-loader-4-ts-loader-reproduction\node_modules\thread-loader\dist\WorkerPool.js:184:29
    at makeLoaderOptions (C:\...\thread-loader-4-ts-loader-reproduction\node_modules\ts-loader\dist\index.js:159:122)
    at getLoaderOptions (C:\...\thread-loader-4-ts-loader-reproduction\node_modules\ts-loader\dist\index.js:103:21)
    at Object.loader (C:\...\thread-loader-4-ts-loader-reproduction\node_modules\ts-loader\dist\index.js:14:21)

webpack 5.81.0 compiled with 1 error in 259 ms
```

If you use thread-loader 3.0.4, this operation will succeed as follows:
```
asset main.bundle.js 1.26 KiB [emitted] (name: main)
./src/index.ts 36 bytes [built] [code generated]
webpack 5.81.0 compiled successfully in 526 ms
```
