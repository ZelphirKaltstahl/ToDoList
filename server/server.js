// start up function that creates entries in the Websites databases.
Meteor.startup(() => {
	var first_user = Meteor.users.findOne();
	if(!first_user) {
		console.log('No users found, creating test user.');
		first_user = Accounts.createUser({
			username: 'test123',
			email: 'test123@test.com',
			password: 'test123',
			profile: {  // public attributes
				firstname: 'test',
				lastname: 'tester'
			}
		});
	}

	if (!TodoListItems.findOne()) {
		console.log("No todo list items yet. Creating starter data.");

		var tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);
		var long_text = 'This is a test entry.';

		TodoListItems.insert({
			long_text: long_text,
			short_text: shorten_long_text(long_text),
			priority: 5,
			status: 'open',
			due_date: tomorrow,
			category: 'test category',
			created_on: new Date(),
			created_by: Meteor.users.findOne()._id,
			background_color: '#FF0000'
		});

		tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);
		long_text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

		TodoListItems.insert({
			long_text: long_text,
			short_text: shorten_long_text(long_text),
			priority: 5,
			status: 'open',
			due_date: tomorrow,
			category: 'test category',
			created_on: new Date(),
			created_by: Meteor.users.findOne()._id,
			background_color: '#FF0000'
		});

		  ////////////////
		 // Categories //
		////////////////
		if (!Categories.findOne()) {
			console.log('Found no categories, inserting some.');
			preinserted_categories = ['Work', 'Family', 'Social', 'Friends', 'Avocations', 'University', 'School', 'Other', 'Personal'];
			_.each(preinserted_categories, (category) => {
				Categories.insert({
					category_name: category,
					created_by: Meteor.users.findOne()._id
				});
			});
		}

		  ////////////
		 // Status //
		////////////
		if (!Status.findOne()) {
			console.log('Could not find any status, inserting some.');
			preinserted_status = ['open', 'in progress', 'done', 'none', 'undecided'];
			_.each(preinserted_status, (one_status) => {
				Status.insert({
					status_name: one_status,
					created_by: Meteor.users.findOne()._id
				});
			});
		}

		  //////////////////////
		 // BackgroundColors //
		//////////////////////
		if (!BackgroundColors.findOne()) {
			console.log('Could not find any background colors, inserting some.');
			preinserted_backgroundcolors = ['#FFFFFF', '#DDDDDD', '#FF6666', '#A1EC69', '#B0C0FF', '#FFEE50'];
			_.each(preinserted_backgroundcolors, (color) => {
				BackgroundColors.insert({
					color_code: color,
					created_by: Meteor.users.findOne()._id
				});
			});
		}
	}
});

function shorten_long_text(text) {
	if (text.length > 50) {
		return text.slice(0, 50) + '...';
	}
	return text;
}

function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function isInteger(n) {
	return !isNaN(parseInt(n)) && isFinite(n);
}
