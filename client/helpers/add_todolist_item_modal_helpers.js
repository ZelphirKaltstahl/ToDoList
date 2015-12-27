Template.add_todolist_item_modal.helpers({
	categories: () => {
		return Categories.find(
			{created_by: Meteor.userId()},
			{limit: 24}
		);
	},

	status: () => {
		return Status.find(
			{created_by: Meteor.userId()},
			{limit: 24}
		);
	},

	backgroundcolors: () => {
		return BackgroundColors.find(
			{created_by: Meteor.userId()},
			{limit: 24}
		);
	}
});
