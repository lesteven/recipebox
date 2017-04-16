import React,{Component} from 'react';

class EditForm extends Component{
	//App is parent component

	render(){
		return(		
			<form>
			<div className="recipeForm">
				<textarea placeholder="Recipe Name" 
				onChange={this.props.updateTitle}
				value={this.props.editTitle}>
				</textarea>
				<button type="button" className="add" onClick={this.props.updateRecipe}>Edit</button>
			</div>
				<textarea className="ingred" 
				onChange={this.props.updateIngred}
				value={this.props.editIngred}
				placeholder="Ingredients separated by commas">
				</textarea>
			</form>
		)
	}
}


export default EditForm;