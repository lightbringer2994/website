import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handlePasswordInput(event.target.value);
  }

  render () {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password"
          value={this.props.password}
          onChange={this.handleChange}
          className="validate" />
          <label htmlFor="password">Password</label>
        </div>
      </div>
    );
  }
}
