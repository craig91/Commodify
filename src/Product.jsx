import React from 'react';
import data from './data.js';

const Product = React.createClass({
	getInitialState(){
		return {name: "", image: "", description: "", price: ""}
	},
	componentDidMount(){
		//Getting the current category path so we can filter through the appropriate array in our switch/case
		let category = this.props.params.category;
		//Getting our route name so we can render the right product 
		let prodID = this.props.params.id;
		let product;
		console.log(category)
		console.log(prodID)
		console.log('Product mounted')
		switch (category) {
			case "water":
				product = data.getWater().filter(prodObj => prodID === prodObj.id ? prodObj : null);
				this.setState({name: product[0].name, image: product[0].image, description: product[0].description, price: product[0].price});
				break;
			case "air":
				product = data.getAir().filter(prodObj => prodID === prodObj.id ? prodObj : null);
				this.setState({name: product[0].name, image: product[0].image, description: product[0].description, price: product[0].price});
				break;
			case "seeds":
				product = data.getSeeds().filter(prodObj => prodID === prodObj.id ? prodObj : null);
				this.setState({name: product[0].name, image: product[0].image, description: product[0].description, price: product[0].price});
				break;
			case "land":
				product = data.getLand().filter(prodObj => prodID === prodObj.id ? prodObj : null);
				this.setState({name: product[0].name, image: product[0].image, description: product[0].description, price: product[0].price});
				break;
			case "thing":
				product = data.getThing().filter(prodObj => prodID === prodObj.id ? prodObj : null);
				this.setState({name: product[0].name, image: product[0].image, description: product[0].description, price: product[0].price});
				break;
			default:
				break;
		}	
	},
	render() {
		console.log("Product is rendering")
		console.log(this.state.name)
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