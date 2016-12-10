import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Name from '../../signupform/Name.jsx';
import Phone from '../../signupform/Phone.jsx';
import Email from '../../signupform/Email.jsx';
import Password from '../../signupform/Password.jsx';
import SubmitButton from '../../signupform/SubmitButton.jsx';
export default class TeacherSignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNumber: '',
      email: '',
      password: '',
    };
    this.signUpUser = this.signUpUser.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handlePhoneNumberInput = this.handlePhoneNumberInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  signUpUser(e) {
    e.preventDefault();
    console.log(this);
    Accounts.createUser({
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      std: this.state.std,
      board: this.state.board,
    },
  (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Meteor.call('sendVerificationLink', (error, response) => {
          if (error) {
            Bert.alert(error.reason, 'danger');
          } else {
            Bert.alert('Welcome!', 'success');
          }
        });
        Meteor.call('addRole', Meteor.userId(), 'teacher', (error, response) => {
          if (error) {
            Bert.alert(error.reason, 'danger');
          } else {
            Bert.alert('Welcome!', 'success');
          }
        });
      }
    });
  }

  handleNameInput(name) {
    this.setState({
      name: name,
    });
  }

  handleEmailInput(email) {
    this.setState({
      email: email,
    });
  }

  handlePhoneNumberInput(phoneNumber) {
    this.setState({
      phoneNumber: phoneNumber,
    });
  }

  handlePasswordInput(password) {
    this.setState({
      password: password,
    });
  }

  render () {
    return (
      <div className="row">
      <form className="col s12" onSubmit={this.signUpUser}>
      <div className="row">
      <Name
      name = {this.state.name}
      handleNameInput = {this.handleNameInput}
      />
      <Phone
      phoneNumber = {this.state.phoneNumber}
      handlePhoneNumberInput = {this.handlePhoneNumberInput}
      />
      </div>
      <Email
      email = {this.state.email}
      handleEmailInput = {this.handleEmailInput}
      />
      <Password
      password ={this.state.password}
      handlePasswordInput = {this.handlePasswordInput}
      />
      <SubmitButton
      btntext = 'Join as a Teacher'
      />
      </form>
      </div>
    );
  }
}
