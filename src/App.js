import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router'
import NavBar from './navigation'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CategoryPage from './categoryPage'
import Carousel from './carousel'

var App = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar />
        {this.props.children}
        <Carousel />
        <br/>
         <Footer />
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
      <Route path="air" component={CategoryPage}></Route>
      <Route path="honey" component={Honey}></Route>
      <Route path="land" component={Land}></Route>
      <Route path="seeds" component={Seeds}></Route>
      <Route path="water" component={Water}></Route>
    </Route>
  </Router>
  ,document.getElementById('root'));
