import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router'
// import $ from 'jquery';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';

var NavLarge = React.createClass({
  render: function () {
    return (
      <div id="navcontainer" className="container-fluid nav-container large">
        <nav id="navHeader" className="navbar navbar-fixed-top" role="navigation">
          <div className="navbar-header">
          <Link className="navbar-brand" to="/"><img src={require('./logo-final.png')} height="150" width="auto" alt="Commodifi Logo Small"/></Link>
            <button id="juno" type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li><Link to="air">Air</Link></li>
            <li><Link to="honey">Honey</Link></li>
            <li><Link to="grains">Grains</Link></li>
            <li><Link to="seeds">Seeds</Link></li>
            <li><Link to="water">Water</Link></li>
          </ul>
          </div>
        </nav>
      </div>
    )
  }
})
export default NavLarge
