<?php

class CustomFieldUtils {

    function __construct() {
        if( function_exists('acf_add_options_page') ) {
            $this->registerOptionPages();
        }
    }

    function registerOptionPages() {
        acf_add_options_page(array(
            'page_title' 	=> 'Stammdaten',
            'menu_title'	=> 'Stammdaten',
            'menu_slug' 	=> 'naturalaesthetics-general-settings',
            'capability'	=> 'edit_posts',
            'redirect'		=> true,
            'icon_url'      => 'dashicons-networking'
        ));

        acf_add_options_sub_page(array(
            'page_title' 	=> 'Produkte',
            'menu_title'	=> 'Produkte',
            'menu_slug' 	=> 'naturalaesthetics-products',
            'capability'	=> 'edit_posts',
            'parent_slug'	=> 'naturalaesthetics-general-settings'
        ));

        acf_add_options_sub_page(array(
            'page_title' 	=> 'Team',
            'menu_title'	=> 'Team',
            'menu_slug' 	=> 'naturalaesthetics-team',
            'capability'	=> 'edit_posts',
            'parent_slug'	=> 'naturalaesthetics-general-settings'
        ));

        acf_add_options_sub_page(array(
            'page_title' 	=> 'Links',
            'menu_title'	=> 'Links',
            'menu_slug' 	=> 'naturalaesthetics-links',
            'capability'	=> 'edit_posts',
            'parent_slug'	=> 'naturalaesthetics-general-settings'
        ));

        acf_add_options_page(array(
            'page_title' 	=> 'Layout',
            'menu_title'	=> 'Layout',
            'menu_slug' 	=> 'naturalaesthetics-layout-settings',
            'capability'	=> 'edit_posts',
            'redirect'		=> true,
            'icon_url'      => 'dashicons-id'
        ));

        acf_add_options_sub_page(array(
            'page_title' 	=> 'Fusszeile',
            'menu_title'	=> 'Fusszeile',
            'menu_slug' 	=> 'naturalaesthetics-footer-settings',
            'capability'	=> 'edit_posts',
            'parent_slug'	=> 'naturalaesthetics-layout-settings'
        ));

    }
}

?>
