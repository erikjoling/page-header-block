/**
 * Internal dependencies
 */
import { getImageSrc } from './functions-helpers.js';

/**
 * WordPress dependencies
 */
const { withSelect } = wp.data;
const { RichText, URLInput } = wp.editor;
const { Dashicon, IconButton } = wp.components;
const { Fragment } = wp.element;
const { __ } = wp.i18n;

/**
 * Edit function
 */
const editPageHeaderBlock = ( props ) => {
	// Extract variables
	const { media, attributes, setAttributes, className, isSelected } = props;
	// const { backgroundImage, heading, content, buttonUrl, buttonText } = attributes;

	// Internal variables
	let featuredImageUrl = '';
	let style = {};

	// Get the url of the featured image
	featuredImageUrl = getImageSrc( media, 'max' );

	// Set the backgroundImage style
	style.backgroundImage = featuredImageUrl ? `url('${featuredImageUrl}')` : '';

	return (
		<Fragment>
			<div className={ `wp-block-page-header` } style={ style }>
				<div className={ `wp-block-page-header__inner` }>
					<h1>Test</h1>
				</div>
			</div>
		</Fragment>
	);
};

/**
 * Grab something
 */
export default withSelect( ( select ) => {
	const { getMedia } = select( 'core' );
	const { getEditedPostAttribute } = select( 'core/editor' );

	const featuredImageId = getEditedPostAttribute( 'featured_media' );

    return {
    	media: featuredImageId ? getMedia( featuredImageId ) : null
    };
} )( editPageHeaderBlock );