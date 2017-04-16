import React from 'react';
import TableItems from './tableitems'

const Table=(props)=>{
	//Receives recipes array and map it out.
	//Maps out <TableItems /> title with ingredients
	//nested inside.
	const recipeItem = props.recipes.map((each,index)=>{
		return(
			< TableItems title={props.recipes[index].title} 
			ingred={props.recipes[index].ingred} 
			delete={props.delete}
			editRecipe={props.editRecipe}
			num={index}
			key={index}/>
		) 
	})
	return (
	<div className="table">
	{recipeItem}
	
	</div>
	)			
}

export default Table;