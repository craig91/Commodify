import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';


var NavBar = React.createClass({
  render: function () {
    return (
      <div className="container-fluid nav-container">
        <nav className="navbar navbar-fixed-top">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Store</Link>
            <button id="juno" type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li><Link to="/" params={{category: '/air'}}>Air</Link></li>
              <li><Link to="/" params={{category: '/honey'}}>Honey</Link></li>
              <li><Link to="/" params={{category: '/land'}}>Land</Link></li>
              <li><Link to="/" params={{category: '/seeds'}}>Seeds</Link></li>
              <li><Link to="/" params={{category: '/water'}}>Water</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
})

export default NavBar
