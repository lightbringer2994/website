import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

export default class SubmitButton extends Component {

  render () {
    return (
      <button className="btn waves-effect waves-light" type="submit" name="action">{this.props.btntext}
      <i className="material-icons right">send</i>
    </button>
    );
  }
}
