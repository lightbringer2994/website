Meteor.methods({
  addRole(userId, role) {
    Roles.addUsersToRoles(userId, role);
    console.log(role);
  },
});
