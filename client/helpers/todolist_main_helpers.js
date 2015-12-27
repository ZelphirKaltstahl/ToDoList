Template.todolist_main.helpers({
	todolistitems: () => {
		return TodoListItems.find (
			{created_by: Meteor.userId()},
			{
				sort: {priority: -1, created_on: 1},
				limit: 50
			}
		);
	}
});
