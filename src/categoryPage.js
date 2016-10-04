import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import data from './data.js'
// import Product from './product'

var CategoryPage = React.createClass({
	getIntitialState(){
		return ({water: [], air: [], honey: [], land: [], seeds: []})
	},
	componentWillMount() {
		let category = this.props.params.category 
		let datawater = data.getWater()
		let that = this 

			// console.log('will mount')
		
		if (category === 'water') {
			  that.setState({water: data.getWater()})
			  // console.log(data.getWater())
		} else if (category === 'air'){
			this.setState({air: data.getAir()})
		} else if (category === 'honey'){
			this.setState({honey: data.getHoney()})
		} else if (category === 'land'){
			this.setState({land: data.getLand()})
		} else if (category === 'seeds'){
			this.setState({seeds: data.getSeeds()})
		}
	},
	componentWillReceiveProps(){
		let category = this.props.params.category 
		let datawater = data.getWater()
		let that = this 
		
			// console.log('will receive props')

		if (category === 'water') {
			  that.setState({water: data.getWater()})
			  // console.log(data.getWater())
		} else if (category === 'air'){
			this.setState({air: data.getAir()})
		} else if (category === 'honey'){
			this.setState({honey: data.getHoney()})
		} else if (category === 'land'){
			this.setState({land: data.getLand()})
		} else if (category === 'seeds'){
			this.setState({seeds: data.getSeeds()})
		}
			
	},
	render(){
		console.log(this.state.water)
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