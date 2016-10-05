import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import data from './data.js'
import {Link} from 'react-router'
import Product from './Product.jsx'

var CategoryPage = React.createClass({
	render(){
		//Declaring current category path. 
		let category = this.props.params.category;
		let itemsArr = data[category + 'Get']()
		let categoryResults = [];

		//Checking if itemsArr contains items and routing to category data with link to product.jsx page. 
		if(itemsArr.length > 0) {
			categoryResults.push(itemsArr.map(
				function(element, index){
					return (
						<div key={index}><Link to={category + '/' + element.id}><img alt={element.id} src={element.image}></img></Link> <p>{element.name}</p> <p>${element.price}</p> </div>
			)}))	
		}
		//Dynamic page title added below. 
		return (
			<div className="container">

				<h1 className='title'>{category[0].toUpperCase() + category.substring(1, category.length) +" Commodities"}</h1>

				<div className="row">

					<div className="col-md-4 productPic ">{categoryResults[0]}</div>

				</div>
			</div>
		)
	}
})

export default CategoryPage