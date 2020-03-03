/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

// Imports
import edit from './block-edit';

// Exports
export const name = 'hwl/page-header';
export const settings = {
	title: __( 'Page Header' ), 
	icon: 'megaphone', 
	category: 'common', 
	keywords: [
		__( 'Page Header' ),
	],

	supports: {},

	attributes: {
		// featuredImage: {
		//     type: 'string',
		//     default: ''
		// },
	},

	edit: edit,
};
