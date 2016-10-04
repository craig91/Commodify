import React from 'react';
import data from 'data.js';

//will we need this.props.url or newProps.params.name?

const Product = React.createClass({
	getInitialState(){
		return {name: "", image: "", description: "", price: ""}
	},
	componentDidMount(){
		let category = this.props.params.category
		let prodName = this.props.params.product
		let product
		switch (category){
			case "water":
				product = data.getWater().filter(prodObj => prodName === prodObj.name ? prodObj : null);
				this.setState({name: product.name, image: product.images, description: product.description, price: product.price});
				break;
			case "air":
				product = data.getAir().filter(prodObj => prodName === prodObj.name ? prodObj : null);
				this.setState({name: product.name, image: product.images, description: product.description, price: product.price});
			case "seeds":
				product = data.getSeeds().filter(prodObj => prodName === prodObj.name ? prodObj : null);
				this.setState({name: product.name, image: product.images, description: product.description, price: product.price});
			case "land":
				product = data.getLand().filter(prodObj => prodName === prodObj.name ? prodObj : null);
				this.setState({name: product.name, image: product.images, description: product.description, price: product.price});
			case "thing":
				product = data.getThing().filter(prodObj => prodName === prodObj.name ? prodObj : null);
				this.setState({name: product.name, image: product.images, description: product.description, price: product.price});
			case "nextThing":
				product = data.getnextThing().filter(prodObj => prodName === prodObj.name ? prodObj : null);
				this.setState({name: product.name, image: product.images, description: product.description, price: product.price});
				break;
		}	
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