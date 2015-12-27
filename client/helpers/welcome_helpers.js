Template.welcome.helpers({
	username: () => {
		if(Meteor.user()) {
			return Meteor.user().username;
		}
		return "anonymous user";
	}
});
