var Elixir = require('laravel-elixir'),
    behat = require('gulp-behat'),
    config = require('./Config'),
    runTests = require('../laravel-elixir/tasks/shared/Tests'),
    _ = require('underscore');

Elixir.extend('behat', function(src, options) {
    runTests({
        name: 'Behat',
        src: ((src || config.path) + '**/*feature'),
        plugin: behat,
        pluginOptions: _.extend(config.options, options)
    });
});