// test/index.js
import Vue from 'vue';
import SetShim from './fixtures/Set';

// Provide Promise since Phantom doesn't have it
if (!global.Promise) {
    global.Promise = require('promise');
}

// Provide Set since Phantom doesn't have it
if (!global.Set) {
    global.Set = SetShim;
}

// Destroy Vue instances automatically:
const destroyable = [];

afterEach(() => {
    destroyable.forEach(vue => vue.$destroy());
    destroyable.splice(0);
});

Vue.mixin({
    mounted() {
        destroyable.push(this);
    }
});

// require all test files using special Webpack feature
// https://webpack.github.io/docs/context.html#require-context
const testsContext = require.context('.', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
