<?php

namespace HWL\Page_Header_Block;

/**
 * Helper function for outputting an asset URL in the theme. This integrates
 * with Laravel Mix for handling cache busting. If used when you enqueue a script
 * or style, it'll append an ID to the filename.
 *
 * @link   https://laravel.com/docs/5.6/mix#versioning-and-cache-busting
 * @param  string  $path  A relative path/file to append to the `dist` folder.
 * @return string
 */
function asset( $path ) {
	
    // Make sure to trim any slashes from the front of the path.
    $path = ltrim( $path, '/' );

	return WP_Plugin::get_file_uri( 'dist/' . $path );
}
