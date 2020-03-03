/**
 * WordPress dependencies
 */
const { has } = lodash;

/**
 * Get the source url of an image
 *
 * @return string
 */
export function getImageSrc( media, size ) {
	let imageSrc = '';

	size = size || 'thumbnail';

	if ( media ) {

		// The media object can be different I guess...
		// - Media with media_details and source_url
		// - Media with direct properties and url
		if ( has( media, [ 'media_details' ] ) ) {
			if ( has( media, [ 'media_details', 'sizes', size ] ) ) {
				imageSrc = media.media_details.sizes[ size ].source_url;
			} else {
				imageSrc = media.source_url;
			}			
		}
		else {
			if ( has( media, [ 'sizes', size ] ) ) {
				imageSrc = media.sizes[ size ].url;
			} else {
				imageSrc = media.url;
			}	
		}
	}

	return imageSrc;
}

/**
 * Get Post Author
 *
 * @param select - the select function
 * @return string
 */
export function getTheAuthor(select) {

    const postAuthorId = select( 'core/editor' ).getEditedPostAttribute( 'author' );
    const authors 	   = select( 'core' ).getAuthors();

    let author;

    for (var i = 0; i < authors.length; i++) {
        if(authors[i].id === postAuthorId) {
            author = authors[i];
            break;
        }
    }

    return author;
}


/**
 * Get Post Published Date
 *
 * @param select - the select function
 * @return string
 */
export function getTheDate(select) {

    const dateRaw = select( 'core/editor' ).getEditedPostAttribute( 'date' );
    const dateFormat = wp.date.__experimentalGetSettings().formats.date;

    return (dateRaw) ?  wp.date.format(dateFormat, dateRaw) : '';
}


/**
 * Get Taxonomy List
 *
 * @param select - the select function
 * @param attribute - the post attribute
 * @param taxonomy - the taxonomy to query
 * @return array
 */
export function getTaxonomyList(select, attribute, taxonomy) {

    const selectedTaxonomies = select( 'core/editor' ).getEditedPostAttribute( attribute );
    const taxonomies = select( 'core' ).getEntityRecords( 'taxonomy', taxonomy, { per_page: -1, hide_empty: true } );
    let taxList = [];

    if(taxonomies) {
        taxonomies.map( tax => {
            if( selectedTaxonomies.includes(tax.id) ) {
                taxList.push(tax.name);
            }
        });
    }

    return taxList;
}