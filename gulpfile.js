var gulp = require('gulp');

var elixir = require('./elixir.js');

elixir(function (mix) {
  mix.webpack('./src/index.js', {}, './dist/vue-easeljs.common.js');
});

