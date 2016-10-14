// React Import
import React from 'react';
import {Link} from 'react-router';

// CSS Import
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


// <footer className="footer ">
// 				<div className="panel-footer panel-custom">
// 					<div className="container">
// 		  				<div >
// 			    			<div >
// 				      			<div >
// 					       			 <Link to='/company/about'> About Us </Link> | 
// 					       			 <Link to='/company/contact'> Contact Us </Link> | 
// 					       			 <Link to='/company/nonprofits'> NonProfits </Link> | 
// 					       			 <Link to='/company/faq'> FAQ</Link> 
// 					      		</div>
// 					      		<div >
// 					       		 	 <p className="muted pull-right">© 2016 COMODiFi. All rights reserved</p>
// 					      		</div>
// 				    		</div>
// 			  			</div>
// 					</div>
// 				</div>
// 			</footer>

var Footer = React.createClass({
	render(){
		return (
			<div className="flex-container">
				<footer className="footer">
					<div className="footer-info">
 					      <Link to='/company/about'>About Us </Link> | 
 					      <Link to='/company/contact'> Contact Us </Link> | 
 					      <Link to='/company/nonprofits'> NonProfits </Link> | 
 					      <Link to='/company/faq'> FAQ</Link> 
 					 </div>
 					 <div >
 					      <p className="muted pull-right">© 2016 COMODiFi. All rights reserved</p>
					 </div>
				</footer>
			</div>
		)
	}
});

export default Footer;