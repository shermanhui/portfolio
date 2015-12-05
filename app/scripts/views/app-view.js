/* global $, Backbone */
/*eslint no-undef: 0, no-unused-vars: 0*/

'use strict';

var app = app || {};

app.appView = Backbone.View.extend({
	el: '.portfolio-body',

	aboutTemplate: template('about-template'),

	events: {
		'mouseover .thumbnail': 'onHover',
		'mouseout .thumbnail': 'onLeave'
	},

	onHover: function(e){
		var relTarg = e.currentTarget || e.fromElement;
		$(relTarg).find('.caption').fadeIn(250); //slideDown(250)
	},

	onLeave: function(e){
		var relTarg = e.relatedTarget || e.toElement;
		$(relTarg).find('.caption').fadeOut(250); //.slideDown(205)
	},

	render: function(){
		this.$el.html(this.aboutTemplate());

		return this;
	}

});

var aboutView = new app.appView();

app.portfolioView = Backbone.View.extend({
	el: '.portfolio-body',

	portfolioTemplate: template('folio-template'),

	render: function(){
		this.$el.html(this.portfolioTemplate());

		return this;
	}
});

var portfolioView = new app.portfolioView();

app.resumeView = Backbone.View.extend({
	el: '.portfolio-body',

	initialize: function(){
	},

	renderCharts: function(){
		$('.chart').easyPieChart({
			barColor: '#3498db',
			size: '150',
			lineWidth: '2',
			easing: 'easeOutBounce'
		});
	},

	resumeTemplate: template('resume-template'),

	render: function(){
		this.$el.html(this.resumeTemplate());
		this.renderCharts();

		return this;
	}

});

var resumeView = new app.resumeView();

app.contactView = Backbone.View.extend({
	el: '.portfolio-body',

	contactTemplate: template('contact-template'),

	render: function(){
		this.$el.html(this.contactTemplate());

		return this;
	}
});

var contactView = new app.contactView();
