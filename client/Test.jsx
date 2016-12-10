import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

export default class Test extends Component {
  constructor() {
    super();

    this.state = {
      subscription: {
        userss: Meteor.subscribe('allUsers'),
      },
    };
  }

  componentWillUnmount() {
    this.state.subscription.users.stop();
  }

  userss () {
    return Meteor.users.find().fetch();
  }

  render () {
    console.log(this.userss());
    return (<div>asd</div>
    );
  }
}
