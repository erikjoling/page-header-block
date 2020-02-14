<?php 

namespace HWL\Page_Header_Block;

/**
 * Safe check if WP_DEBUG is true
 */
function is_wp_debug()  {
    return (defined('WP_DEBUG') && true === WP_DEBUG);
}

/**
 * Log data to wp-content/debug.log
 *
 * It doesn't matter if WP_DEBUG is true because I also want to be able
 * to log on production environment (which has WP_DEBUG disabled)
 */
function log( $data )  {
    if ( is_array( $data ) || is_object( $data ) ) {
        error_log( print_r( $data, true ) );
    } else {
        error_log( $data );
    }
}

/**
 * Dump (print) data somewhere on the website
 *
 * This should never be on production so WP_DEBUG should be enabled
 */
function dump( $data )  {
    if ( true === WP_DEBUG ) {
        if ( is_array( $data ) || is_object( $data ) ) {
            print_r( $data, true );
        } else {
            echo $data;
        }
    }
}

/**
 * Checks if the environment is local
 */
function is_local_dev() {
    $domain_array = explode(".", $_SERVER['SERVER_NAME']);
    $domain_extension = end($domain_array);

    return ($domain_extension == 'test' || $domain_extension == 'dev');
}
