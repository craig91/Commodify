import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router'
import $ from 'jquery';
import NavBar from './navigation'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


var App = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    )
  }
})

var Air = React.createClass ({
  render: function () {
    return (
      <div></div>
    )
  }
})

var Honey = React.createClass ({
  render: function () {
    return (
      <div></div>
    )
  }
})

var Land = React.createClass ({
  render: function () {
    return (
      <div></div>
    )
  }
})

var Seeds = React.createClass ({
  render: function () {
    return (
      <div></div>
    )
  }
})

var Water = React.createClass ({
  render: function () {
    return (
      <div></div>
    )
  }
})

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    <Route path="air" component={Air}></Route>
    <Route path="honey" component={Honey}></Route>
    <Route path="land" component={Land}></Route>
    <Route path="seeds" component={Seeds}></Route>
    <Route path="water" component={Water}></Route>
    </Route>
  </Router>
  , document.getElementById('root'));
