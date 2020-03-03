/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./block/block-edit.js":
/*!*****************************!*\
  !*** ./block/block-edit.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions-helpers.js */ "./block/functions-helpers.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var withSelect = wp.data.withSelect;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    URLInput = _wp$editor.URLInput;
var _wp$components = wp.components,
    Dashicon = _wp$components.Dashicon,
    IconButton = _wp$components.IconButton;
var Fragment = wp.element.Fragment;
var __ = wp.i18n.__;
/**
 * Edit function
 */

var editPageHeaderBlock = function editPageHeaderBlock(props) {
  // Extract variables
  var title = props.title,
      author = props.author,
      media = props.media,
      attributes = props.attributes,
      setAttributes = props.setAttributes,
      className = props.className,
      isSelected = props.isSelected; // const { featuredImage } = attributes;
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

  var featuredImageUrl = '';
  var authorName = author && author.hasOwnProperty('name') ? author.name : '';
  var style = {}; // Get the url of the featured image

  featuredImageUrl = Object(_functions_helpers_js__WEBPACK_IMPORTED_MODULE_0__["getImageSrc"])(media, 'max'); // authorName 		 = getAuthorName( author );
  // Set the backgroundImage style

  style.backgroundImage = featuredImageUrl ? "url('".concat(featuredImageUrl, "')") : '';
  return React.createElement(Fragment, null, React.createElement("div", {
    className: "wp-block-page-header",
    style: style
  }, React.createElement("div", {
    className: "wp-block-page-header__inner"
  }, React.createElement("h1", null, title), React.createElement("span", null, authorName))));
};
/**
 * Grab something
 */


/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute;

  var _select2 = select('core'),
      getMedia = _select2.getMedia;

  var author = Object(_functions_helpers_js__WEBPACK_IMPORTED_MODULE_0__["getTheAuthor"])(select);
  var title = getEditedPostAttribute('title');
  var featuredImage = getEditedPostAttribute('featured_media');
  return {
    title: title,
    media: featuredImage ? getMedia(featuredImage) : null,
    author: author
  };
})(editPageHeaderBlock));

/***/ }),

/***/ "./block/block-index.js":
/*!******************************!*\
  !*** ./block/block-index.js ***!
  \******************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _block_edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-edit */ "./block/block-edit.js");
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__; // Imports

 // Exports

var name = 'hwl/page-header';
var settings = {
  title: __('Page Header'),
  icon: 'megaphone',
  category: 'common',
  keywords: [__('Page Header')],
  supports: {},
  attributes: {// featuredImage: {
    //     type: 'string',
    //     default: ''
    // },
  },
  edit: _block_edit__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./block/block-register.js":
/*!*********************************!*\
  !*** ./block/block-register.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-index */ "./block/block-index.js");
/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */

/**
 * WordPress dependencies
 */
var registerBlockType = wp.blocks.registerBlockType;
/**
 * Import blocks
 */


/**
 * Register Blocks
 */

registerBlockType(_block_index__WEBPACK_IMPORTED_MODULE_0__["name"], _block_index__WEBPACK_IMPORTED_MODULE_0__["settings"]);

/***/ }),

/***/ "./block/functions-helpers.js":
/*!************************************!*\
  !*** ./block/functions-helpers.js ***!
  \************************************/
/*! exports provided: getImageSrc, getTheAuthor, getTheDate, getTaxonomyList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageSrc", function() { return getImageSrc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTheAuthor", function() { return getTheAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTheDate", function() { return getTheDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaxonomyList", function() { return getTaxonomyList; });
/**
 * WordPress dependencies
 */
var _lodash = lodash,
    has = _lodash.has;
/**
 * Get the source url of an image
 *
 * @return string
 */

function getImageSrc(media, size) {
  var imageSrc = '';
  size = size || 'thumbnail';

  if (media) {
    // The media object can be different I guess...
    // - Media with media_details and source_url
    // - Media with direct properties and url
    if (has(media, ['media_details'])) {
      if (has(media, ['media_details', 'sizes', size])) {
        imageSrc = media.media_details.sizes[size].source_url;
      } else {
        imageSrc = media.source_url;
      }
    } else {
      if (has(media, ['sizes', size])) {
        imageSrc = media.sizes[size].url;
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

function getTheAuthor(select) {
  var postAuthorId = select('core/editor').getEditedPostAttribute('author');
  var authors = select('core').getAuthors();
  var author;

  for (var i = 0; i < authors.length; i++) {
    if (authors[i].id === postAuthorId) {
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

function getTheDate(select) {
  var dateRaw = select('core/editor').getEditedPostAttribute('date');

  var dateFormat = wp.date.__experimentalGetSettings().formats.date;

  return dateRaw ? wp.date.format(dateFormat, dateRaw) : '';
}
/**
 * Get Taxonomy List
 *
 * @param select - the select function
 * @param attribute - the post attribute
 * @param taxonomy - the taxonomy to query
 * @return array
 */

function getTaxonomyList(select, attribute, taxonomy) {
  var selectedTaxonomies = select('core/editor').getEditedPostAttribute(attribute);
  var taxonomies = select('core').getEntityRecords('taxonomy', taxonomy, {
    per_page: -1,
    hide_empty: true
  });
  var taxList = [];

  if (taxonomies) {
    taxonomies.map(function (tax) {
      if (selectedTaxonomies.includes(tax.id)) {
        taxList.push(tax.name);
      }
    });
  }

  return taxList;
}

/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./block/block-register.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/erik/Webdev/www/pnv/public_html/wp-content/plugins/page-header-block/block/block-register.js */"./block/block-register.js");


/***/ })

/******/ });