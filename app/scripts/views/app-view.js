var app = app || {};

app.appView = Backbone.View.extend({
	el: '.portfolio-body',

	aboutTemplate: template("about-template"),

	events: {

	},

	initialize: function(){
	},

	render: function(){
		this.$el.append(this.aboutTemplate());

		return this;
	}

});

var aboutView = new app.appView();