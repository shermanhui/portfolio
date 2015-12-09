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

	initialize: function(){
		this.listenTo(this.collection, 'add', this.render); //prevents refresh on different pages, but if this is off then
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

		this.$el.html(this.aboutTemplate({collection: this.collection.toJSON()}));

		return this;
	}

});

var aboutView = new app.appView({collection: featured});


app.portfolioView = Backbone.View.extend({
	el: '.portfolio-body',

	projectTemplate: template("project-item-template"),

	initialize: function(options){
		//space for event bus

		this.listenTo(this.collection, 'add', this.render); //this causes duplicate renders...but collection didn't reset?

	},

	render: function(){
		this.$el.html(this.projectTemplate({collection: this.collection.toJSON()}));

		return this;
	}
});

var portfolioView = new app.portfolioView({collection: projects});

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
