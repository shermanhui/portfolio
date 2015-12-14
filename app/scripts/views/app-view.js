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
		this.listenTo(featured, 'add', this.render); //this is a problem because when user refreshes page, it automatically re-renders to about or profile page
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

app.projectItemView = Backbone.View.extend({

	className: 'col-xs-6 col-sm-4 portfolio-item',

	projectTemplate: template('project-item-template'),

	initialize: function(options){

		this.bus = options.bus;

		//space for event bus

	},

	events: {
		'click': 'showModal'
	},

	showModal: function(e){
		e.preventDefault();

		this.bus.trigger('renderModal', this.model); // shows user details on food item

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
		this.listenTo(this.collection, 'reset', this.render); //this causes duplicate renders...but collection didn't reset?
	},

	render: function(){
		var self = this;

		self.collection.each(function(project){

			var el = $('.row');

			var projectItem = new app.projectItemView({bus: app.Bus, model: project});

			el.append(projectItem.render().$el);
		});

		return this;
	}
});

var projectsView = new app.projectsView({collection: projects});

app.portfolioView = Backbone.View.extend({
	el: '.portfolio-body',

	portfolioTemplate: template('folio-template'),

	initialize: function(){
	},

	render: function(){
		this.$el.html(this.portfolioTemplate());

		this.$el.append('<div class="row"></div>');

		//projectsView.render(); // this causes a duplicate render due to projects.fetch({reset: true})

		return this;
	}
});

var portfolioView = new app.portfolioView();

app.modalView = Backbone.View.extend({
	className: 'modal fade',

	modalTemplate: template('modal-template'),

	initialize: function(options){
		this.bus = options.bus;

		this.bus.on('renderModal', this.renderModal, this);
	},

	attributes: {
		tabindex: '-1',
		role: 'dialog'
	},

	renderModal: function(data){
		this.model = data;

		this.$el.html(this.modalTemplate(this.model.toJSON())).modal();

		return this;
	}
});

var modalView = new app.modalView({bus: app.Bus});

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
