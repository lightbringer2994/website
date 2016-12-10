import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

export default class Phone extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handlePhoneNumberInput(event.target.value);
  }

  render () {
    return (
      <div className="input-field col s6">
        <input id="phone_number"
        type="text"
        value={this.props.phoneNumber}
        onChange={this.handleChange}
        className="validate" />
        <label htmlFor="phone_number"> Phone Number</label>
      </div>
    );
  }
}
