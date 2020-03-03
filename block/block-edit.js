/**
 * Internal dependencies
 */
import { getImageSrc, getTheAuthor } from './functions-helpers.js';

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
	const { title, author, media, attributes, setAttributes, className, isSelected } = props;
	// const { featuredImage } = attributes;

	// const [ authorId ] = useEntityProp( 'postType', 'post', 'author' );
	// const author = useSelect(
	// 	( select ) =>
	// 		select( 'core' ).getEntityRecord( 'root', 'user', authorId ),
	// 	[ authorId ]
	// );
	// return author ? (
	// 	<address>{ sprintf( __( 'By %s' ), author.name ) }</address>
	// ) : null;

	// Internal variables
	let featuredImageUrl = '';
	let authorName = (author && author.hasOwnProperty('name')) ? author.name : '';
	let style = {};

	// Get the url of the featured image
	featuredImageUrl = getImageSrc( media, 'max' );
	// authorName 		 = getAuthorName( author );

	// Set the backgroundImage style
	style.backgroundImage = featuredImageUrl ? `url('${featuredImageUrl}')` : '';

	return (
		<Fragment>
			<div className={ `wp-block-page-header` } style={ style }>
				<div className={ `wp-block-page-header__inner` }>
					<h1>{ title }</h1>
					<span>{ authorName }</span>
				</div>
			</div>
		</Fragment>
	);
};

/**
 * Grab something
 */
export default withSelect( ( select ) => {
	const { getEditedPostAttribute } = select( 'core/editor' );
	const { getMedia } = select( 'core' );

	const author = getTheAuthor( select );

	const title 		  = getEditedPostAttribute( 'title' );
	const featuredImage   = getEditedPostAttribute( 'featured_media' );

    return {
    	title: title,
    	media: featuredImage ? getMedia( featuredImage ) : null,
    	author : author
    };
} )( editPageHeaderBlock );