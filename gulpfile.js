var gulp = require('gulp');
var webpack = require('webpack');

var elixir = require('./elixir.js');


elixir.ready(function () {
  elixir.webpack.mergeConfig({
    output: {
      libraryTarget: 'commonjs',
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
  });
});

elixir(function (mix) {
    mix.webpack('index.js', './dist', './src');
});

