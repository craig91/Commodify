import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import data from './data.js'
import {Link} from 'react-router'
// import Product from './product'

var CategoryPage = React.createClass({
	getIntitialState(){
		return ({current: []})
	},
	// componentWillMount() {
	// 	console.log("will mount");
	// 	let category = this.props.params.category 

	// 	if (category === 'water') {
	// 		  this.setState({current: data.getWater()})
	// 	} else if (category === 'air'){
	// 		this.setState({current: data.getAir()})
	// 	} else if (category === 'honey'){
	// 		this.setState({current: data.getHoney()})
	// 	} else if (category === 'land'){
	// 		this.setState({current: data.getLand()})
	// 	} else if (category === 'seeds'){
	// 		this.setState({current: data.getSeeds()})
	// 	}
	// },
	componentWillReceiveProps(){
		console.log("will receive props");
		let category = this.props.params.category  

		if (category === 'water') {
			  this.setState({current: data.getWater()})
		} else if (category === 'air'){
			this.setState({current: data.getAir()})
		} else if (category === 'honey'){
			this.setState({current: data.getHoney()})
		} else if (category === 'land'){
			this.setState({current: data.getLand()})
		} else if (category === 'seeds'){
			this.setState({current: data.getSeeds()})
		}
			
	},
	render(){
		let category = this.props.params.category;
		let itemsArr = []
		if (category === 'water') {
			  itemsArr = data.getWater()
		} else if (category === 'air'){
			itemsArr = data.getAir()
		} else if (category === 'honey'){
			itemsArr = data.getWater()
		} else if (category === 'grains'){
			itemsArr = data.getGrains()
		} else if (category === 'seeds'){
			itemsArr = data.getSeeds()
		}
		let categoryResults = [];
		let currentObjArr = this.state ? this.state.current : null;
		if(itemsArr.length > 0) {
			categoryResults.push(itemsArr.map(function(element, index){
				return <div key={index}> <Link to={category + '/' + element.id}><img src={element.image}></img></Link> <p>{element.name}</p> <p>{element.price}</p> </div>
			}))	
		}
		console.log('cat results', categoryResults)

		return (

		<div className="container">
				<h1 className='title'>Category Products</h1>
				<div className="row">
					<div className="col-md-4 productPic ">{categoryResults[0]}</div>
				</div>
			</div>
		)
	}
})

export default CategoryPage