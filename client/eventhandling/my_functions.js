Meteor.methods({
	shorten_long_text: function (text) {
		if (text.length > 50) {
			return text.slice(0, 50) + '...';
		}
		return text;
	},

	isNumber: function (n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	},

	isInteger: function (n) {
		return !isNaN(parseInt(n)) && isFinite(n);
	}
});
