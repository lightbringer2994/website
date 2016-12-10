import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

export default class Name extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handleEmailInput(event.target.value);
  }

  render () {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email"
          value={this.props.email}
          onChange={this.handleChange}
          className="validate" />
          <label htmlFor="email">Email</label>
        </div>
      </div>
    );
  }
}
