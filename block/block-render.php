<?php
/**
 * Setup Dynamic block
 */

namespace HWL\Page_Header_Block;

// Register block
add_action( 'init', __NAMESPACE__ . '\register_block' );

/**
 * Registers the `ejo-base/contact-form` block on server.
 */
function register_block() {
	register_block_type(
		'hwl/page-header',
		array(
			'render_callback' => __NAMESPACE__ . '\render_block',
		)
	);
}

/**
 * Renders the `ejo-base/contact-form` block on server.
 *
 * @param array $attributes The block attributes.
 *
 * @return string Returns the post content with latest posts added.
 */
function render_block( $attributes = [] ) {

	$page_title = apply_filters( 'hwl/page_header_block/page_title', get_the_title() );
	$image_id   = apply_filters( 'hwl/page_header_block/image_id', get_post_thumbnail_id() );
	$image_size = apply_filters( 'hwl/page_header_block/image_size', 'large' );
	$image_url  = ($image_id) ? \wp_get_attachment_image_url( $image_id, $image_size ) : false;

	ob_start(); 

	?>
	<header class="page-header" style="background-image: url(<?= $image_url ?>);">
		<div class="page-header__inner">
			<h1 class="page-title page-header__title"><?= $page_title ?></h1>
		</div>
	</header>
	<?php

	$render = ob_get_clean();

	return apply_filters( 'hwl/page_header_block', $render );
}

