Template.add_todolist_item_modal.events({
	'click .js-save-new-todolist-item-button': (event) => {
		var input_long_text = $('#add_todolist_item_text_attribute').val();
		var input_status = $('#status_select').val();
		var input_due_date = $('#due_date_input').val();
		var input_category = $('#category_select').val();
		var input_background_color = $('#background_color_select').val();
		var input_user_id = Meteor.userId();
		var input_created_on = new Date();
		var input_shortened_text = shorten_long_text(input_long_text);

		var input_priority = parseInt($('#priority_select').val());

		if (isNumber(input_priority)) {
			TodoListItems.insert({
				long_text: input_long_text,
				short_text: input_shortened_text,
				priority: input_priority,
				status: input_status,
				due_date: input_due_date,
				category: input_category,
				created_on: input_created_on,
				created_by: input_user_id,
				background_color: input_background_color
			});
		} else {
			// TODO: Show some message modal
		}
	},

	'change .js-background_color_select': (event) => {
		var color_code = $('#background_color_select').val();
		$('.color-displayer').css('background-color', color_code);
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
