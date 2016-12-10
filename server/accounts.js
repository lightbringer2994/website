import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

Accounts.onCreateUser(function (options, user) {
  user =  Object.assign({}, user, options);
  return user;
});
