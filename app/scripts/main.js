$(document).ready(function() {

	function adjust_body_offset() {

		$('body').css('padding-top', $('.navbar-inverse').outerHeight(true) + 20 + 'px' );

	}

	$(window).resize(adjust_body_offset);

	$(document).ready(adjust_body_offset);

    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').fadeIn(250); //slideDown(250)
        },
        function(){
            $(this).find('.caption').fadeOut(250); //.slideDown(205)
        }
    );

    $(".disabled-link").hover(
    	function() {
    		$(this).find('.error').preventDefault();
    	}
    );
});

/*
 * @desc Helper function that retrieves templates
 * @param string - the id of the template
 * @return underscore function - returns template according to id given
 */
var template = function(id){

	return _.template($("#" + id).html());

};

//https://jsfiddle.net/4c2yespy/8/