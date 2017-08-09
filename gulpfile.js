var gulp = require('gulp');

var elixir = require('./elixir.js');

elixir(function (mix) {
  mix.webpack('app.js');
  mix.copy('public/js/app.js', 'app.js');
  mix.copy('node_modules/vue/dist/vue.js', 'vue.js');
  mix.copy('node_modules/jquery/dist/jquery.min.js', 'jquery.min.js');
});

