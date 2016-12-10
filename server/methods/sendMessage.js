Meteor.methods({
  sendMessage(conversationId, message) {
    conversation = Meteor.conversations.findOne(conversationId);
    conversation.sendMessage(message);
  },
});
