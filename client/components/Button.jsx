import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

export default class Login extends Component {

  render () {
    return (
      <a className="btn" onClick = {this.props.handleClick}>{this.props.buttonText}</a>
    );
  }
}
