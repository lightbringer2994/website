import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

export default class Name extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handleNameInput(event.target.value);
  }

  render () {
    return (
      <div className="input-field col s6">
        <input id="name" type="text"
        value={this.props.name}
        onChange={this.handleChange}
        className="validate" />
        <label htmlFor="name"> Name</label>
      </div>
    );
  }
}
