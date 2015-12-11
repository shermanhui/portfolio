/* global Backbone */
/*eslint no-undef: 0, no-unused-vars: 0*/

'use strict';

var app = app || {};

app.Router = Backbone.Router.extend({

	initialize: function(){

	},

	routes: {
		'': 'renderAbout',
		'about': 'renderAbout',
		'portfolio': 'renderPortfolio',
		'resume': 'renderResume',
		'contact': 'renderContact'
	},

	renderAbout: function(){
		featured.fetch();
		aboutView.render();
	},

	renderPortfolio: function(){
		projects.fetch({reset:true});
		portfolioView.render();
	},

	renderResume: function(){
		resumeView.render();
	},

	renderContact: function(){
		contactView.render();
	}

});

var router = new app.Router();
Backbone.history.start();
