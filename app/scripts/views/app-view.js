/* global $, Backbone */
/*eslint no-undef: 0, no-unused-vars: 0*/

'use strict';

var app = app || {};

app.projectDetails = Backbone.Model.extend({

	urlRoot: "/profile.json",

	initialize: function(attrs){
		console.log("model init");
	},

	defaults: {
		title: "No Title",
		dates: "Unknown",
		caption: "Unknown",
		description: "Placeholder",
		url: "",
		image: "",
		alt: "Placeholder-image"
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

// var projects = new app.projectCollection([{
// 		"title" : "Calorie Tracker",
// 		"caption": "My First Backbone Project",
// 		"dates" : " ",
// 		"url": "https://shui91.github.io/backbone-healthtracker-app",
// 		"description" : "Using BackboneJS, the Nutritionix API, and Firebase I built a calorie tracker with persistent storage",
// 		"image" : "http://i.imgur.com/dUTGP2qm.png",
// 		"alt" : "Tracker Image"
// 	},
// 	{
// 		"title" : "Neighbourhood Map",
// 		"caption": "My First Backbone Project",
// 		"dates" : " ",
// 		"url": "https://shui91.github.io/backbone-healthtracker-app",
// 		"description" : "Using KnockoutJS, OOJS, and various Web APIs, I built a simple pub crawl app",
// 		"image" : "http://i.imgur.com/uVWPgAgm.png",
// 		"alt" : "Tracker Image"

// 	}]);
var projects = new app.projectCollection();
projects.fetch({
	reset: true,

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

app.projectItemView = Backbone.View.extend({
	tagName: 'div',

	className: 'col-md-4 col-sm-6 portfolio-item',

	projectTemplate: template("project-item-template"),

	initialize: function(options){

		console.log(this.model);

		//space for event bus

	},

	render: function(){
		this.$el.html(this.projectTemplate(this.model.toJSON()));

		return this;
	}
});

app.projectsView = Backbone.View.extend({
	el: '.portfolio-body',

	initialize: function(options){
		//space for event bus

		this.listenTo(this.collection, 'reset', this.render);

	},

	render: function(){
		var self = this;
		var i = 0;
		self.$el.html('<div class="row"></div>')

		self.collection.each(function(project){
			var el = $(".row");

			// 		self.$el.append('<div class="clearfix"></div>');
			var projectItem = new app.projectItemView({model: project});

			el.append(projectItem.render().$el);
		});

		return this;
	}
});

var projectsView = new app.projectsView({collection: projects});

// app.portfolioView = Backbone.View.extend({
// 	el: '.portfolio-body',

// 	portfolioTemplate: template('folio-template'),

// 	render: function(){
// 		this.$el.html(this.portfolioTemplate());

// 		return this;
// 	}
// });

// var portfolioView = new app.portfolioView();

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
