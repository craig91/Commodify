import React from 'react'
import {Link} from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

var Footer = React.createClass({
	render(){
		return (
			<footer className="footer navbar-fixed-bottom">
				<div className="panel-footer panel-custom">
					<div className="container">
		  				<div className="row">
			  				<br/>
			    			<div className="col-lg-12">
				      			<div className="col-md-8">
					       			 <Link to='about'> About Us </Link> | 
					       			 <Link to='contact'> Contact Us </Link> | 
					       			 <Link to='faq'> FAQ</Link> 
					      		</div>
					      		<div className="col-md-4">
					       		 	<p className="muted pull-right">© 2016 COMODiFi. All rights reserved</p>
					      		</div>
				    		</div>
			  			</div>
					</div>
				</div>
			</footer>
		)
	}
})

export default Footer