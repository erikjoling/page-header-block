<?php
/**
 * Autoload bootstrap file.
 *
 * This file is used to autoload classes and functions necessary for the theme
 * to run. Classes utilize the PSR-4 autoloader in Composer which is defined in
 * `composer.json`.
 */

namespace HWL\Page_Header_Block;

# ------------------------------------------------------------------------------
# Run the Composer autoloader.
# ------------------------------------------------------------------------------
#
# Auto-load any projects via the Composer autoloader. Be sure to check if the
# file exists in case someone's using Composer to load their dependencies in
# a different directory. This also autoloads our theme's classes.

// if ( \file_exists( WP_Plugin::get_file_path( 'vendor/autoload.php' ) ) ) {
// 	require_once( WP_Plugin::get_file_path( 'vendor/autoload.php' ) );
// }

# ------------------------------------------------------------------------------
# Autoload functions files.
# ------------------------------------------------------------------------------
#
# Load any functions-files from the `/app` folder that are needed. Add additional
# files to the array without the `.php` extension.

\array_map( function( $file ) {
	require_once( WP_Plugin::get_file_path( "app/{$file}.php" ) );
}, [
	'functions-debug',
	'functions-assets',
] );




