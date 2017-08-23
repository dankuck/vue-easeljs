
var elixir = require('./elixir.js');

var webpackConfig;

elixir(function (mix) {
    webpackConfig = elixir.webpack.config;
});

module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['mocha'],
        files: [
            'test/test.js', 
            {
                pattern: 'images/*',
                included: false,
                served: true,
            },
        ],
        preprocessors: {
            'test/test.js': ['webpack'],
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true,
        },
        singleRun: true,
    });
};
