import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Conversations extends TrackerReact(Component) {
  constructor () {
    super();
    this.state = {
      subscription: {
        conversations: Meteor.subscribe('curretnUserConversations'),
      },
    };
  }

  componentWillUnmount() {
    this.state.subscription.conversations.stop();
  }

  render () {
    console.log(Meteor.user());
    return (
      <div>
        conversations
      </div>
    );
  }
}
