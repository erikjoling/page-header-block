/**
 * More information
 *
 * On Laravel Mix
 * https://laravel-mix.com/docs/5.0/installation
 * https://scotch.io/tutorials/using-laravel-mix-with-webpack-for-all-your-assets
 *
 * Other
 * https://github.com/justintadlock/mythic/blob/master/webpack.mix.js
 */

let mix = require('laravel-mix');

// Export mix-manifest.json to assets
mix.setPublicPath('dist/');

// Gutenberg blocks
mix.react('block/block-register.js', 'dist/js/block.js');

