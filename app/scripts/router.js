var app = app || {};

app.Router = Backbone.Router.extend({

	initialize: function(){

	},

	routes: {
		''         : 'renderAbout',
		'about'    : 'renderAbout',
		'portfolio': 'renderPortfolio',
		'resume'   : 'renderResume',
		'contact'  : 'renderContact'
	},

	renderAbout: function(){
		aboutView.render();
	},

	renderPortfolio: function(){
		portfolioView.render();
	},

	renderResume: function(){
		$('.portfolio-body').empty();
	},

	renderContact: function(){
		$('.portfolio-body').empty();
	}

});

new app.Router();
Backbone.history.start();