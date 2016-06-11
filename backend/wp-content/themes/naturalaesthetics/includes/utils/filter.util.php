<?php

class FilterUtil {
    function removeEmptyParagraphTag( $content ){
        $content = preg_replace( array(
            '#<p>\s*<(div|aside|section|article|header|footer)#',
            '#</(div|aside|section|article|header|footer)>\s*</p>#',
            '#</(div|aside|section|article|header|footer)>\s*<br ?/?>#',
            '#<(div|aside|section|article|header|footer)(.*?)>\s*</p>#',
            '#<p>\s*</(div|aside|section|article|header|footer)#',
        ), array(
            '<$1',
            '</$1>',
            '</$1>',
            '<$1$2>',
            '</$1',
        ), $content );
        return preg_replace('#<p>(\s|&nbsp;)*+(<br\s*/*>)*(\s|&nbsp;)*</p>#i', '', $content);
    }
}

?>