import React from 'react';
import ReactDOM from 'react-dom';

// import AccountsUI from './AccountsUI.jsx';

export default class Navbar extends React.Component {

  render() {
    return (
      <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right">
          <li><a href="/about">View Teachers</a></li>
          <li><a href="badges.html">View Classrooms</a></li>
        {/* <li>  <AccountsUI /> </li> */}
        </ul>
      </div>
    </nav>
    );
  }
}
