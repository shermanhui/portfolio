/* global $, Backbone */
/*eslint no-undef: 0, no-unused-vars: 0*/

'use strict';

var app = app || {};

app.projectDetails = Backbone.Model.extend({

	urlRoot: "/profile.json",

	initialize: function(attrs){
		console.log("model init");
	},

	validate: function(attrs){
		if (!attrs){
			return "Missing Data!";
		}
	}
});


app.projectCollection = Backbone.Collection.extend({

	model: app.projectDetails,

	url: "/profile.json",

	initialize: function(){
		console.log("collection init");
	}
});

var projects = new app.projectCollection();
projects.fetch({
	success: function(){
		console.log(projects);
	},
	error: function(){
		console.log("something went wrong");
	}
});

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
