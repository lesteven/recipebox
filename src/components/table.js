import React from 'react';
import TableItems from './tableitems'

const Table=({recipes})=>{
	//Receives recipes array and map it out.
	//Maps out <TableItems /> title with ingredients
	//nested inside.
	const recipeItem = recipes.map((each,index)=>{
		return(
			< TableItems title={recipes[index].title} 
			ingred={recipes[index].ingred} key={index}/>
		) 
	})
	return (
	<div className="table">
	{recipeItem}
	
	</div>
	)			
}

export default Table;