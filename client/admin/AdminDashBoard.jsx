import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class AdminDashBoard extends TrackerReact(Component) {
  constructor() {
    super();

    this.state = {
      subscription: {
        adminStudents: Meteor.subscribe('allStudents'),
      },
    };

  }

  componentWillUnmount() {
    this.state.adminStudents.resolutions.stop();
  }

  allStudents() {
    return Meteor.users.find().fetch({ roles: 'student' });
  }

  render () {
    let students = this.allStudents();
    // if (allusers.length < 1) {
    //   return (
    //     <div>Loading</div>
    //   );
    // }

    return (
      <div>
        {this.allStudents().map((student) => {
          return (
            <div>
              {student.name}
            </div>
          );
        })}
      </div>
    );
  }
}
