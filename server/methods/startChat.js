Meteor.methods({
  startChat(teacherId) {
    teacher = Meteor.users.findOne(teacherId);
    student = Meteor.user();
    let participants = [student, teacher];

    console.log(Meteor.user().conversations().fetch());
    Meteor.user().findExistingConversationWithUsers([teacher._id], function (error, result) {
      if (error) {
        console.log(error);
      }

      if (!result) {
        let conversation = new Conversation().save();
        conversation.addParticipants(participants);
        // console.log('participants');
      }

      if (result) {
        let conversation =  Meteor.conversations.findOne({ _id: result });
        // console.log(Meteor.user().conversations);
        conversation.sendMessage('hello world');
        conversation.messages().forEach((message)=> {
        });
      }
    });

  },
});
