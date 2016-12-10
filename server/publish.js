import { Resolutions } from '../both/collections/resolutions.jsx';

Meteor.publish('allResolutions', function () {
  return Resolutions.find({ complete: false });
});

Meteor.publish('userResolutions', function () {
  return Resolutions.find({ user: this.userId });
});
