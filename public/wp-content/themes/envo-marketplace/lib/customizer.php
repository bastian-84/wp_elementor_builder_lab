<?php
/**
 * Envo Marketplace Theme Customizer
 *
 * @package Envo Marketplace
 */

$envo_marketplace_sections = array( 'info', 'demo' );

foreach( $envo_marketplace_sections as $section ){
    require get_template_directory() . '/lib/customizer/' . $section . '.php';
}

function envo_marketplace_customizer_scripts() {
    wp_enqueue_style( 'envo-marketplace-customize',get_template_directory_uri().'/lib/customizer/css/customize.css', '', 'screen' );
    wp_enqueue_script( 'envo-marketplace-customize', get_template_directory_uri() . '/lib/customizer/js/customize.js', array( 'jquery' ), '20170404', true );
}
add_action( 'customize_controls_enqueue_scripts', 'envo_marketplace_customizer_scripts' );
