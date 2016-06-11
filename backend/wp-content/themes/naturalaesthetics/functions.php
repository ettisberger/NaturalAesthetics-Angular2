<?php

require_once(__DIR__.'/includes/utils/customfield.util.php');
require_once(__DIR__.'/includes/utils/filter.util.php');

$customFieldUtil = new CustomFieldUtils();
$filterUtil = new FilterUtil();

// NAVIGATION
register_nav_menus( array(
    'primary' => __( 'Primary', 'NaturalAesthetics' ),
) );

// WP CONFIGS
show_admin_bar( false );

add_filter('the_content', array($filterUtil, 'removeEmptyParagraphTag'), 22, 1);

?>
