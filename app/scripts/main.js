function adjust_body_offset() {
    $('body').css('padding-top', $('.navbar-inverse').outerHeight(true) + 'px' );
}

$(window).resize(adjust_body_offset);

$(document).ready(adjust_body_offset);

//https://jsfiddle.net/4c2yespy/8/