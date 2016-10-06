import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import NavBar from './navigation'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CategoryPage from './untitled'
import Product from './Product.jsx'
import HomePage from './HomePage'


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
    <IndexRoute component={HomePage}/>
      <Route path=":category" component={CategoryPage}></Route>
      <Route path='/:category/:id' component={Product}></Route>
    </Route>
  </Router>
,document.getElementById('root'));
