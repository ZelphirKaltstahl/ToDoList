Router.configure({
	layoutTemplate: 'BaseLayout'
});

Router.route('/', function() {
	this.render('header', {
		to: 'header'
	});

	this.render('navbar', {
		to: 'navbar'
	});

	this.render('welcome', {
		to: 'main'
	});

	this.render('footer', {
		to: 'footer'
	});
});

Router.route('/todolist', function() {
	this.render('header', {
		to: 'header'
	});

	this.render('navbar', {
		to: 'navbar'
	});

	this.render('todolist_main', {
		to: 'main'
	});

	this.render('todolist_item_management', {
		to: 'management'
	});

	this.render('modals', {
		to: 'modals'
	})

	this.render('footer', {
		to: 'footer'
	});
});

Router.route('/todolist/item/:_id', function() {
	this.render('header', {
		to: 'header'
	});

	this.render('navbar', {
		to: 'navbar'
	});

	this.render('todolist_item_details', {
		to: 'main',
		data: function() {
			return TodoListItems.findOne({
				_id: this.params._id
			});
		}
	});

	this.render('footer', {
		to: 'footer'
	});
});
