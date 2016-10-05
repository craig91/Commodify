import React from 'react';
import data from './data.js';

const Product = React.createClass({
	getInitialState(){
		return {name: "", image: "", description: "", price: ""}
	},
	componentDidMount(){
		//Getting the current category path so we can filter through the appropriate array
		let category = this.props.params.category;
		//Getting our route name so we can render the right product 
		let prodID = this.props.params.id;
		let product = data[category + "Get"]().filter(prodObj => prodID === prodObj.id ? prodObj : null);
		this.setState({name: product[0].name, image: product[0].image, description: product[0].description, price: product[0].price})	
	},
	render() {
		return (
			<div>
				<h1>{this.state.name}</h1>
					
					<img src={this.state.image} alt={this.state.name}></img>

					<p>{this.state.description}</p>

					<h3>${this.state.price}</h3>
			</div>
		)
	}
});

export default Product;