import React, { Component } from 'react';
import Table from './components/table';
import Form from './components/form';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      click:false,
      recipeTitle:'',
      recipeIngred:'',
      recipesArray:[{'title':'oranges','ingred':[10,'bread']},{'title':'apples','ingred':['duh','whatever','lala']}]
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleUnclick = this.handleUnclick.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.ingredChange = this.ingredChange.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
    this.delete = this.delete.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
  }
  handleClick(){
    this.setState({click: true})
  }
  handleUnclick(){
    this.setState({click: false})
  }
  titleChange(event){
    this.setState({recipeTitle:event.target.value})
  }
  ingredChange(event){
    this.setState({recipeIngred:event.target.value})
  }
  delete(key){
    const arr = this.state.recipesArray.slice();
    arr.splice(key,1);
    this.setState({recipesArray:arr})
  }
  addRecipe(){
    const arr = this.state.recipesArray.slice();
    
    const add={
      'title': this.state.recipeTitle,
      'ingred': this.state.recipeIngred.split(',')
    }
    arr.push(add);
    this.setState({recipesArray:arr,click:false,
        recipeTitle:'',recipeIngred:''})
  }
  editRecipe(key){
    this.handleClick();
    const arr = this.state.recipesArray.slice();
    const element = arr.splice(key, 1)
    console.log(element[0].ingred)
    this.setState({recipeTitle:element[0].title})
    this.setState({recipeIngred:element[0].ingred})
  }
  render() {

    localStorage.setItem('recipes',JSON.stringify(this.state.recipesArray))
    return (
      <div className="App">
        {/* Gives recipes array to <Table/> */}
        <Table recipes={this.state.recipesArray}
          delete={this.delete}
          editRecipe={this.editRecipe}
        />
        {this.state.click? 
        (<button onClick={this.handleUnclick}>Close</button>) : 
        (<button onClick={this.handleClick}>Add Recipe</button>) }
        {/*Form for adding recipes to recipes*/}
        {this.state.click? <Form 
          ingredChange={this.ingredChange}
          titleChange={this.titleChange}
          recipeTitle={this.state.recipeTitle}
          recipeIngred={this.state.recipeIngred}
          addRecipe={this.addRecipe}
        />: null}
      </div>
    );
  }
}

export default App;
