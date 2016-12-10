import { Resolutions } from '../both/collections/resolutions.jsx';

Meteor.methods({
  addResolution(resolution) {

    Resolutions.insert({
      text: resolution,
      complete: false,
      createdAt: new Date(),
      user: Meteor.userId(),
    });
  },

  toggleResolution(resolution) {
    if (Meteor.userId() !== resolution.user) {
      throw new Meteor.Error('not autho');
    }

    Resolutions.update(resolution._id, {
      $set: { complete: !resolution.complete },
    });
  },

  deleteResolution(resolution) {
    if (Meteor.userId() !== resolutioncontainer.user) {
      throw new Meteor.Error('not autho');
    }

    Resolutions.remove(resolution._id);
  },

  checkPhoneExists(number) {
    return !!(Meteor.users.findOne({ 'profile.phone': number }));
    console.log(!!(Meteor.users.findOne({ 'profile.phone': number })));
  },
});
