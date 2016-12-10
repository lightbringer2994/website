import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

export default class StdSelect extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.stdSelect)).on('change', this.handleChange);
  }

  handleChange(event) {
    this.props.handleStdInput(event.target.value);
  }

  render () {
    return (
      <div className="input-field col s6">
        <select
        ref="stdSelect"
        value={this.props.std}
        onChange={this.handleChange}>
          <option value="12">Class 12</option>
          <option value="11">Class 11</option>
          <option value="10">Class 10</option>
          <option value="9">Class 9</option>
          <option value=".bind(this)8">Class 8</option>
          <option value="7 ">Class 7
          </option>
          <option value="6 ">Class 6
          </option>
        </select>
      </div>
    );
  }
}
