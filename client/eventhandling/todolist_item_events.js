Template.todolist_item.events({
	'click .js-priority-up-todolist-item-button': (event) => {
		var item_id = event.target.id.split('_')[1];
		var previous_priority = TodoListItems.findOne({_id: item_id}).priority;

		TodoListItems.update(
			{_id: item_id},
			{$set: {priority: previous_priority + 1}}
		);
	},

	'click .js-priority-down-todolist-item-button': (event) => {
		var item_id = event.target.id.split('_')[1];
		var previous_priority = TodoListItems.findOne(
			{_id: item_id}
		).priority;

		TodoListItems.update(
			{_id: item_id},
			{$set: {priority: Math.max(previous_priority - 1, 0)}}
		);
	},

	'click .js-remove-todolist-item-button': (event) => {
		var deletion_id = event.target.id.split('_')[1];

		$('#'+deletion_id).removeClass('flexbox-item');
		$('#'+deletion_id).css('min-width', '0px');

		$(() => {
			$('#'+deletion_id).animate({
				width: '0px'
			}, {duration: 600, queue: false});
			$('#'+deletion_id+' > p').animate({
				opacity: 0
			}, {duration: 500, queue: false});
			$('#'+deletion_id).animate({
				height: '0px'
			}, {
				duration: 600,
				queue: false,
				complete: () => {
					$('#'+deletion_id).animate({
						border: '1px',
						margin: '0px',
						padding: '0px'
					}, {
						duration: 100,
						complete: () => {
							TodoListItems.remove({_id: deletion_id});
						}
					});
				} // end complete
			});
		});
	}, // end event handling

	'click .js-mark-done-todolist-item-button': (event) => {
		var item_id = event.target.id.split('_')[1];

		TodoListItems.update(
			{_id: item_id},
			{$set: {status: 'done'}}
		);
	}
});
