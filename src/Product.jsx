import React from 'react';
import data from 'data.js';

//will we need this.props.url or newProps.params.name?

const Product = React.createClass({
	getInitialState(){
		return {name: "", image: "", description: "", price: ""}
	},
	componentDidMount(){
		this.props.params.name
	},
	render() {
		return (
			<div>
				<h1>PRODUCT NAME</h1>
					
					<img src="PRODUCT URL" alt="PRODUCT NAME"></img>

					<p>PRODUCT DESCRIPTION</p>

					<h3>PRODUCT PRICE</h3>
			</div>
		)
	}
});

export default Product;