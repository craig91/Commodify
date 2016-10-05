import React from 'react'
import CategoryPage from './categoryPage'
import Carousel from './carousel'

var HomePage = React.createClass({
	render(){
		return (
			<div className="homepage">
				<h1>Premium Commodities</h1>
				<Carousel />
			</div>
		)
	}
})

export default HomePage