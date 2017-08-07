var gulp = require('gulp');

var elixir = require('./elixir.js');

elixir(function (mix) {
  mix.webpack('app.js');
  mix.copy('public/js/app.js', 'app.js');
});

