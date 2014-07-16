Router.map(function(){
	this.route('home', {path: '/'});
	this.route('about');
	this.route('stormdamage');
	this.route('services');
	this.route('contact');
});

var hooks = {

	scrollUp: function(){
		$('body,html').scrollTop(0);
	}

}

Router.onAfterAction(hooks.scrollUp);