import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component {
  setVar() {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        component='div'
        transitionName='route'
        transitionEnterTimeout={600}
        transitionAppearTimeout={600}
        transitionLeaveTimeout={400}
        transition
        >
        <h1>About Us</h1>
        <button onClick={this.setVar}> SignUp me</button>
    </ReactCSSTransitionGroup>
    );
  }
}
