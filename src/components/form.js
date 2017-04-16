import React,{Component} from 'react';

class Form extends Component{
	//App is parent component

	render(){
		return(		
			<form>
			<div className="recipeForm">
				<textarea placeholder="Recipe Name" 
				onChange={this.props.titleChange}
				value={this.props.recipeTitle}>
				</textarea>
				<button type="button" className="add" onClick={this.props.addRecipe}>Add</button>
			</div>
				<textarea className="ingred" 
				onChange={this.props.ingredChange}
				value={this.props.recipeIngred}
				placeholder="Ingredients separated by commas">
				</textarea>
			</form>
		)
	}
}

export default Form;