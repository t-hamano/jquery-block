<?php
/**
 * Plugin Name:       jQuery Block
 * Version:           1.0.0
 * Requires at least: 6.8
 * Requires PHP:      8.2
 * Author:            Aki Hamano
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       jquery-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function create_block_jquery_block_init() {
	wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
}
add_action( 'init', 'create_block_jquery_block_init' );
