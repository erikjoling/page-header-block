<?php
/**
 * Plugin Name:  HWL Page Header Block
 * Plugin URI:   https://github.com/erikjoling/page-header-block
 * Description:  Use a block to manage your page header
 * Version:      0.1-dev
 * Author:       Erik Joling <erik@hetweblokaal.nl>
 * Author URI:   https://www.hetweblokaal.nl/
 * Text Domain:  hwl-phb
 * Domain Path:  /assets/languages
 * Requires PHP: 7
 * License:      GPLv3
 * 
 * GitHub Plugin URI:  https://github.com/erikjoling/page-header-block
 * GitHub Branch:      master
 */

namespace HWL\Page_Header_Block;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

/**
 * WP Plugin Class
 * 
 * Class to set Plugin properties and load the bootstrap files. 
 */
final class WP_Plugin {

	/**
     * File
     *
     * @var string
     */
    private static $file;

    /**
     * Directory path with trailing slash.
     *
     * @var string
     */
    private static $dir;

    /**
     * Directory URI with trailing slash.
     *
     * @var string
     */
    private static $uri;

    /**
     * Plugin identifier
     *
     * @var string
     */
    private static $id;

    /**
     * Version
     *
     * @var string
     */
    private static $version;

    /**
     * Constructor method.
     *
     * @return void
     */
    private function __construct() {}

    /**
     * Statically boot
     *
     * @return void
     */
    public static function boot() {
        static::set_file();
        static::set_dir();
        static::set_uri();
        static::set_version();
        static::set_id();

        // Load bootstrap files
        // Note that autoloading should happen first so that
        // any classes/functions are available that we might need.
        require_once( static::get_file_path( 'app/bootstrap-autoload.php' ) );
        require_once( static::get_file_path( 'app/bootstrap-app.php' )      );

        /**
         * On plugin activation
         */
        register_activation_hook( static::get_file(), function() {
            log( 'Activated ' . static::get_id() );
        });
        
        
        /**
         * On plugin deactivation
         */
        register_deactivation_hook( static::get_file(), function() {
            log( 'Deactivated ' . static::get_id() );            
        });
    }


    /*=============================================================*/
    /**                        Getters                             */
    /*=============================================================*/

    /**
     * Gets the plugin file
     *
     * @return string
     */
    public static function get_file() {
        return static::$file;
    }

    /**
     * Gets the plugin directory path with trailing slash.
     *
     * @return string
     */
    public static function get_dir() {
        return static::$dir;
    }

    /**
     * Gets the plugin uri path with trailing slash.
     *
     * @return string
     */
    public static function get_uri() {
        return static::$uri;
    }

    /**
     * Gets the plugin id
     *
     * @return string
     */
    public static function get_id() {
        return static::$id;
    }

    /**
     * Gets the plugin version
     *
     * @return string
     */
    public static function get_version() {
        return static::$version;
    }


    /*=============================================================*/
    /**                        Setters                             */
    /*=============================================================*/

    /**
     * Sets the plugin file
     *
     * @return void
     */
    private static function set_file() {
        static::$file = __FILE__;
    }

    /**
     * Sets the plugin directory (with trailing slash)
     *
     * @return void
     */
    private static function set_dir() {
        static::$dir = plugin_dir_path( __FILE__ );
    }

    /**
     * Sets the plugin URI (with trailing slash)
     *
     * @return void
     */
    private static function set_uri() {
        static::$uri = plugin_dir_url( __FILE__ );
    }

    /**
     * Sets the plugin ID
     *
     * @return void
     */
    private static function set_id() {
        static::$id = basename( __DIR__ );
    }

    /**
     * Sets the plugin version
     *
     * @return void
     */
    private static function set_version() {

        // Get plugin version
        // Note: Can't use `get_plugin_data()` because it doesn't work on the frontend
        $plugin_data = get_file_data( __FILE__, array('Version' => 'Version') );

        // Set the version property
        static::$version = $plugin_data['Version'];
    }


    /*=============================================================*/
    /**                       Utilities                            */
    /*=============================================================*/

    /**
     * Get the file-path within this plugin
     *
     * @param string $file relative to this plugin root
     * @return string filepath
     */
    public static function get_file_uri( $file ) {
        return static::get_uri() . $file;
    }
    
    /**
     * Get the file-path within this plugin
     *
     * @param string $file relative to this plugin root
     * @return string filepath
     */
    public static function get_file_path( $file ) {
        return static::get_dir() . $file;
    }
}

// Bootstrap the plugin
WP_Plugin::boot();