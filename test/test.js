// test/index.js
// require all test files using special Webpack feature
// https://webpack.github.io/docs/context.html#require-context

if (!global.Promise) {
    global.Promise = require('promise');
}

var testsContext = require.context('.', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
