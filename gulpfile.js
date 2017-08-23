var gulp = require('gulp');

var elixir = require('./elixir.js');

elixir(function (mix) {
    mix.webpack('app.js', './', './src');
});

