// security variables
UNAUTHORIZED = false;
AUTHORIZED = true;

TodoListItems = new Mongo.Collection('todolistitems');
Categories = new Mongo.Collection('categories');
Status = new Mongo.Collection('status');
BackgroundColors = new Mongo.Collection('backgroundcolors');

TodoListItems.allow({
	insert: (user_id, doc) => {
		if (Meteor.user()) {
			return AUTHORIZED;
		}
		return UNAUTHORIZED;
	},

	remove: (user_id, doc) => {
		if (Meteor.user()) {
			if(user_id == doc.created_by) {
				return AUTHORIZED;
			}
			return UNAUTHORIZED;
		}
		return UNAUTHORIZED;
	},

	update: (user_id, doc) => {
		if (Meteor.user()) {
			if(user_id == doc.created_by) {
				return AUTHORIZED;
			}
			return UNAUTHORIZED;
		}
		return UNAUTHORIZED;
	}
});
