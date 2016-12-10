import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Accounts } from 'meteor/accounts-base';

import StdSelect from './StdSelect.jsx';
import BoardSelect from './BoardSelect.jsx';
import Name from './Name.jsx';
import Phone from './Phone.jsx';
import Email from './Email.jsx';
import Password from './Password.jsx';
import SubmitButton from './SubmitButton.jsx';

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNumber: '',
      email: '',
      password: '',
      std: '',
      board: 'ICSE',
    };
    this.signUpUser = this.signUpUser.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handlePhoneNumberInput = this.handlePhoneNumberInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleStdInput = this.handleStdInput.bind(this);
    this.handleBoardInput = this.handleBoardInput.bind(this);
  }

  componentDidMount() {
    $(document).ready(function () {
      $('select').material_select();
    });
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
        Meteor.call('addRole', Meteor.userId(), 'student', (error, response) => {
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

  handleStdInput(std) {
    this.setState({
      std: std,
    });
  }

  handleBoardInput(board) {
    this.setState({
      board: board,
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
      <div className="row">
      <StdSelect std={this.state.std}
      handleStdInput={this.handleStdInput}
      />
      <BoardSelect
      board={this.state.board}
      handleBoardInput={this.handleBoardInput}
      />
      </div>
      <SubmitButton
      btntext = 'Sign Up'
      />
      </form>
      </div>
    );
  }
}
