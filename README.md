# Usage
## Installation

```
npm install laravel-elixir-behat
```

## Require
Within Your `Gulpfile`, add:
```
var elixir = require('laravel-elixir');

require('laravel-elixir-behat-wrapper');

elixir(function(mix) {
    mix.behat();
});
```
If you want to use `$ gulp tdd` it will automatically add the `features/` folder to your watch list. And watches all `*.feature` and `*Context.php` files.

## Customization
You can customize each of the plugin settings, see the following

#### Change `*.feature` folder
```
elixir(function(mix) {
    mix.behat('tests/acceptance/');
});
```
### Change behat.yml file
```
elixir(function(mix) {
    mix.behat(null,{config: 'behat-test.yml'});
});
```
### Other Settings
See [gulp-behat] for all lists of config. By Default `Notify` is `True`

License
----

MIT

[gulp-behat]: <https://github.com/joemccann/dillinger>
