$(document).ready(function() {

	function adjust_body_offset() {

		$('body').css('padding-top', $('.navbar-inverse').outerHeight(true) + 20 + 'px' );

	}

	$(window).resize(adjust_body_offset);

	$(document).ready(adjust_body_offset);

    $(".disabled-link").hover(
    	function() {
    		$(this).find('.error').preventDefault();
    	}
    );
});

$(function() {
  $('.chart').easyPieChart({
    barColor: '#3498db',
    size: '150',
    lineWidth: '2',
    easing: 'easeOutBounce',
  });
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