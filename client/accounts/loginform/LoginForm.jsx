import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import Email from '../signupform/Email.jsx';
import Password from '../signupform/Password.jsx';
import SubmitButton from '../signupform/SubmitButton.jsx';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.loginUser = this.loginUser.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);

  }

  loginUser(event) {
    event.preventDefault();
    Meteor.loginWithPassword(this.state.email, this.state.password);
  }

  handleEmailInput(email) {
    this.setState({
      email: email,
    });
  }

  handlePasswordInput(password) {
    this.setState({
      password: password,
    });
  }

  render () {
    return (
      <form className="col s12" onSubmit={this.loginUser}>
        <div className="row">
          <Email
          email = {this.state.email}
          handleEmailInput = {this.handleEmailInput}
          />
          <Password
          password ={this.state.password}
          handlePasswordInput = {this.handlePasswordInput}
          />
        </div>
        <SubmitButton
        btntext = 'Login'
        />
      </form>
    );
  }
}
