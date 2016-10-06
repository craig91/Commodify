import React from 'react'
import {Link} from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

var Footer = React.createClass({
	render(){
		return (
			<footer className="footer ">
				<div className="panel-footer panel-custom">
					<div className="container">
		  				<div >
			    			<div >
				      			<div >
					       			 <Link to='/company/about'> About Us </Link> | 
					       			 <Link to='/company/contact'> Contact Us </Link> | 
					       			 <Link to='/company/nonprofits'> NonProfits </Link> | 
					       			 <Link to='/company/faq'> FAQ</Link> 
					      		</div>
					      		<div >
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