import React from 'react';
import data from 'data.js';

//will we need this.props.url or newProps.params.name?

const Product = React.createClass({
	getInitialState(){
		return {name: "", image: "", description: "", price: ""}
	},
	componentDidMount(){
		let product = this.props.params.name
		Switch (product){
			case "water"
				this.setState({name: data.getWater().name, image: data.getWater().images, description: data.getWater().description, price: data.getWater()})
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