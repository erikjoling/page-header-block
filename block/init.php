<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 */

namespace HWL\Page_Header_Block;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Load dynamic block
include( WP_Plugin::get_dir() . '/block/block-render.php' );

// Hook assets
add_action( 'enqueue_block_assets',        __NAMESPACE__ . '\block_assets' );        // Hook: Frontend+backend assets.
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\block_editor_assets' ); // Hook: Backend assets.


// Add main-content-div after page-header block
add_filter( 'hwl/page_header_block', __NAMESPACE__ . '\add_content_tag_opening' );
add_filter( 'the_content', __NAMESPACE__ . '\add_content_tag_closing' );

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 */
function block_assets() { 
	
	// // Styles.
	// wp_enqueue_style(
	// 	'page-header-block', 
	// 	WP_Plugin::get_uri() . '/assets/css/blocks.css', 
	// 	array( 'wp-editor' ),
	// 	filemtime( WP_Plugin::get_dir() . '/assets/css/blocks.css' ) // Version: File modification time.
	// );
}


/**
 * Enqueue Gutenberg block assets for backend editor.
 */
function block_editor_assets() { 

	// Scripts.
	wp_enqueue_script(
		'page-header-block-editor', 
		WP_Plugin::get_uri() . '/dist/js/block.js', 
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-data', 'wp-components', 'lodash' ), 
		filemtime( WP_Plugin::get_dir() . '/dist/js/block.js' ),
		true // Enqueue the script in the footer.
	);

	// // Styles.
	// wp_enqueue_style(
	// 	'page-header-block-editor', 
	// 	WP_Plugin::get_uri() . '/assets/css/blocks.editor.css', 
	// 	array( 'wp-edit-blocks' ), 
	// 	filemtime( WP_Plugin::get_dir() . '/assets/css/blocks.editor.css' )
	// );
}

function has_content_tag() {
	return apply_filters( 'hwl/page_header_block/show_content_tag', true );
}

function render_content_tag_opening() {

	$content_wrap_open = '<div class="page-main"><div class="page-main__inner">' ;

	return apply_filters( 'hwl/page_header_block/content_tag_opening', $content_wrap_open );
}

function render_content_tag_closing() {
	$content_wrap_close = '</div></div>' ;

	return apply_filters( 'hwl/page_header_block/content_tag_closing', $content_wrap_close );
}

function add_content_tag_opening($render) {

	if ( has_content_tag() ) {
		$render .= render_content_tag_opening();
	}

	return $render;
}

function add_content_tag_closing($render) {

	if ( has_content_tag() ) {
		$render .= render_content_tag_closing();
	}

	return $render;
}