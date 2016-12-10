import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

// import {}socialize:messaging

import TrackerReact from 'meteor/ultimatejs:tracker-react';

import { Button } from '../components/Button.jsx';

export default class TeachersIndex extends TrackerReact(Component) {
  constructor() {
    super();

    this.state = {
      subscription: {
        allTeachers: Meteor.subscribe('allTeachers'),
      },
    };
    this.startChat = this.startChat.bind(this);
  }

  componentWillUnmount() {
    this.state.subscription.allTeachers.stop();
  }

  allTeachers() {
    return Meteor.users.find({ roles: 'teacher' }).fetch();
  }

  startChat(teacherId) {
    conversation = new Conversation;
    Meteor.call('startChat', teacherId, (error, response) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Welcome!', 'success');
      }
    });
    console.log('conversation');
    // conversation.addParticipant(Meteor.users.findOne({ _id: teacherid }));
  }

  render () {
    let teachers = this.allTeachers();
    // if (allusers.length < 1) {
    //   return (
    //     <div>Loading</div>
    //   );
    // }

    return (
      <div className = "row">
      {this.allTeachers().map((teacher) => {

          return (
          <div key = {teacher._id} className="col s12 m4">
          <div className="card small horizontal">
            <div className="card-image">
              <img src="http://lorempixel.com/100/190/nature/6" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
              <h5>{teacher.name}</h5>
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
              <div className="card-action">
                <a className="btn"
                onClick = {() =>this.startChat(teacher._id)}
                >
                {console.log(teacher._id)}
                  <i className="material-icons left">chat_bubble</i> Message
                </a>
              </div>
              </div>
            </div>
          </div>
            );
        })}
      </div>
    );
  }
}
