import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import Product from './product'

var CategoryPage = React.createClass({
	getIntitialState(){
		return ({water: [], air: [], honey: [], Land: [], Seeds: []})
	},
	componentWillMount(){
	},
	render(){
		console.log(this.props)
		return (
			<div className="container">
				<h1 className='title'>Category Products</h1>
				<div className="row">
					<div className="col-md-4 ">1</div>
					<div className="col-md-4">1</div>
					<div className="col-md-4">1</div>
				</div>
				<div className="row">
					<div className="col-md-4">1</div>
					<div className="col-md-4">1</div>
					<div className="col-md-4">1</div>
				</div>
			</div>
		)
	}
})

export default CategoryPage