Meteor.publish('allMessages', function () {
  return Meteor.users.find({ roles: 'teacher' },
    { fields: {
      email: 1,
      name: 1,
      phoneNumber: 1,
      roles: 1,
    },
  });
});
