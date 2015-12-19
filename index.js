var Elixir = require('laravel-elixir');
var behat = require('gulp-behat');
var config = require('./Config');
var runTests = require('../laravel-elixir/tasks/shared/Tests');

Elixir.extend('behat', function(src, options) {
    console.log(config);
    runTests({
        name: 'Behat',
        src: ((src || config.path) + '**/*feature'),
        plugin: behat,
        pluginOptions: options || config.options
    });
});
