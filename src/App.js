import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router'
import $ from 'jquery';
import NavBar from './navigation'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CategoryPage from './categoryPage'


var App = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar />
        {this.props.children}
        <br/>
         <Footer />
      </div>
    )
  }
})



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path=":category" component={CategoryPage}>
        <Route path=':product' component={CategoryPage}></Route>
      </Route>
    </Route>
  </Router>
,document.getElementById('root'));
