Meteor.publish('allStudents', function () {
  return Meteor.users.find({ roles: 'student' },
    { fields: {
      email: 1,
      name: 1,
      phoneNumber: 1,
      std: 1,
      board: 1,
      roles: 1,
    },
  });
});
