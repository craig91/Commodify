import React from 'react';
import data from './data.js';

const NonProfits = React.createClass({
	getInitialState(){
		return {orgs: data.getNonprofs()}
	},
	render(){
		let stuff = this.state.orgs.map(npObj => <div key={npObj.name}> <h3>{npObj.id}</h3> <br/> <p>{npObj.awareness}</p> <br/> <a src={npObj.url}>{npObj.url}</a> <br/> <p>{npObj.description}</p> </div>)
		return (
			<div>
				<h1>Don't waste your money on our overpriced garbage. Support these great Non-Profits instead!</h1>
					{stuff}
			</div>
		)
	}
});

export default NonProfits;