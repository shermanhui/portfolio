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

	},

	renderResume: function(){

	},

	renderContact: function(){

	}

});

new app.Router();
Backbone.history.start();