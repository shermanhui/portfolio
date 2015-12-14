/* global $, _ , Backbone*/
/*eslint no-undef: 0, no-unused-vars: 0*/

'use strict';

var app = app || {};
$(document).ready(function() {

	function adjustBodyOffset() {

		$('body').css('padding-top', $('.navbar-inverse').outerHeight(true) + 20 + 'px' );

	}

	$(window).resize(adjustBodyOffset);

	$(document).ready(adjustBodyOffset);

	$('.disabled-link').hover(
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

	return _.template($('#' + id).html());

};

//https://jsfiddle.net/4c2yespy/8/

app.Bus = _.extend({}, Backbone.Events); // bus object instantiation, pass bus object to have reference to the data in each view
