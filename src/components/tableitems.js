import React, {Component} from 'react';
import Ingredients from './ingredients'

class TableItems extends Component{
	constructor(props){
		super(props);
		this.handleShow = this.handleShow.bind(this);
		this.handleUnshow = this.handleUnshow.bind(this);
		this.state={
			showIngred:false
		}
	}
	handleShow(){
		this.setState({showIngred:true})
	}
	handleUnshow(){
		this.setState({showIngred:false})
	}
	render(){
	//Ingredients are in an array, so each item is mapped out
	// to <Ingredients />
	const eachIngred=this.props.ingred.map((each,index)=>
		<Ingredients ingred={each} key={index}/>
		)
	return (
	<div className="ingredBox">
		{this.state.showIngred?
			<p className="header" onClick={this.handleUnshow}>{this.props.title}</p>
			: <p className="header" onClick={this.handleShow}>{this.props.title}</p>
		}
		{this.state.showIngred?
			<div className="ingredbody">
			<p className="ingredTitle">Ingredients:</p>
			{eachIngred}
			<button className="delete">Delete</button>
			<button>Edit</button>
			</div>
			: null
		}

	</div>
	)
	}
}

export default TableItems;