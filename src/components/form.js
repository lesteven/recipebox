import React,{Component} from 'react';

class Form extends Component{
	//App is parent component
	constructor(props){
		super(props);
		this.state={
			recipeTitle:'',
      		recipeIngred:'',
		}
		this.titleChange = this.titleChange.bind(this);
		this.ingredChange = this.ingredChange.bind(this);
	}
	titleChange(){
		this.setState({recipeTitle:event.target.recipeTitle})
	}
	ingredChange(){
		this.setState({recipeIngred:event.target.recipeIngred})
	}
	render(){
		return(		
			<form>
			<div className="recipeForm">
				<textarea placeholder="Recipe Name" 
				onChange={this.titleChange}
				value={this.state.recipeTitle}>
				</textarea>
				<button className="add">Add</button>
			</div>
				<textarea className="ingred" 
				onChange={this.ingredChange}
				value={this.state.recipeIngred}
				placeholder="Ingredients separated by commas">
				</textarea>
			</form>
		)
	}
}

export default Form;