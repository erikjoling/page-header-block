<?php

namespace HWL\Page_Header_Block;

/**
 * Bootstrap app
 */
add_action( 'plugins_loaded', function() {

	// Load text domain
	load_plugin_textdomain( 'hwl-phb', false, dirname(WP_Plugin::get_file()) . '/assets/languages' );

	// Register block
	require_once( WP_Plugin::get_file_path( 'block/init.php' ) );
});