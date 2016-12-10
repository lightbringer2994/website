import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

export default class BoardSelect extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  //Since materialize modifies the dom, this is required to fire the onChange event
  componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.boardSelect)).on('change', this.handleChange);
  }

  handleChange(event) {
    this.props.handleBoardInput(event.target.value);
    console.log(this.props.board);
  }

  render () {
    return (
      <div className="input-field col s6">
        <select
        ref="boardSelect"
        value={this.props.board}
        onChange={this.handleChange}>
          <option value="CBSE">CBSE</option>
          <option value="ICSE">ICSE</option>
          <option value="IGCSE">IGCSE</option>
          <option value="IB">IB</option>
          <option value="Kerala">Kerala State</option>
          <option value="Tamil Nadu">Tamil Nadu State
          </option>
        </select>
      </div>
    );
  }
}
