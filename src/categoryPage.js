import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import data from './data.js'
import {Link} from 'react-router'
import Product from './Product.jsx'
import MasonryMixin from 'react-masonry-mixin'

var masonryOptions = {
    transitionDuration: 0
};

var CategoryPage = React.createClass({
    mixins: [MasonryMixin(React)('masonryContainer', masonryOptions)],
    render: function () {
			let category = this.props.params.category;
			let itemsArr = data[category + 'Get']()
			let categoryResults = [];
			// const Grid = measureItems(CSSGrid)

			//Checking if itemsArr contains items and routing to category data with link to product.jsx page.
			if(itemsArr.length > 0) {
				categoryResults.push(itemsArr.map(
					function(element, index){
						return (
							<div key={index}><Link to={category + '/' + element.id}><img alt={element.id} src={element.image}></img></Link> <p>{element.name}</p> <p>${element.price}</p> </div>
				)}))
			}
        var childElements = this.props.elements.map(function(element){
           return (
                <div>
                    {categoryResults[0]}
                </div>
            );
        });
        return (
            <div ref="masonryContainer">
							<h1 className='title'>{category[0].toUpperCase() + category.substring(1, category.length) +" Commodities"}</h1>
              {childElements}
            </div>
        );
    }
});

export default CategoryPage
