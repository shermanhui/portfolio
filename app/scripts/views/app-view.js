var app = app || {};

app.appView = Backbone.View.extend({
	el: '.portfolio-body',

	aboutTemplate: template("about-template"),

	render: function(){
		this.$el.html(this.aboutTemplate());

		return this;
	}

});

var aboutView = new app.appView();

app.portfolioView = Backbone.View.extend({
	el: '.portfolio-body',

	portfolioTemplate: template("folio-template"),

	render: function(){
		this.$el.html(this.portfolioTemplate());

		return this;
	}
})

var portfolioView = new app.portfolioView();