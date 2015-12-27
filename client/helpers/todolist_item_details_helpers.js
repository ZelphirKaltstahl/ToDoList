Template.todolist_item_details.helpers({
	get_username_for_id: (user_id) => {
		var user = Meteor.users.findOne({_id:user_id});
		if(user) {
			return user.username;
		}
		return 'unknown';
	},
});
