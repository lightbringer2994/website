import React, { Component } from 'react';
import render from 'react-dom';
import { Resolutions } from '../../both/collections/resolutions.jsx';

export default class ResolutionsForm extends Component {
  addResolution(e) {
    e.preventDefault();
    var text = this.refs.resolution.value.trim();
    Meteor.call('addResolution', text, (error, data) => {
      if (error) {
        Bert.alert('Please LogIn', 'danger', 'fixed-top', 'fa-frown-o');
      } else {
        this.refs.resolution.value = '';
      }
    });
  }

  render () {
    return (
      <form onSubmit={this.addResolution.bind(this)}>
        <input
          type="text"
          ref="resolution"
          placeholder="ewr"
        />
      </form>
    );
  }
}
