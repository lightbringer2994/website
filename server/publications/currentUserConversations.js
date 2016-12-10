Meteor.publish('curretnUserConversations', function () {
  let user = Meteor.users.findOne(this.userId);
  return user.conversations();
});
