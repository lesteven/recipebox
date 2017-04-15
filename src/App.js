import React, { Component } from 'react';
import Table from './components/table';
import Form from './components/form';

class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleUnclick = this.handleUnclick.bind(this);
    this.state={
      click:false,
      recipeTitle:'',
      recipeIngred:'',
      recipesArray:[{'title':'oranges','ingred':[10,'bread']},{'title':'apples','ingred':['duh','whatever','lala']}]
    }
  }
  handleClick(){
    this.setState({click: true})
  }
  handleUnclick(){
    this.setState({click: false})
  }
  addRecipe(){

  }
  render() {
    
    localStorage.setItem('recipes',JSON.stringify(this.state.recipes))
    return (
      <div className="App">
        {/* Gives recipes array to <Table/> */}
        <Table recipes={this.state.recipesArray}/>
        {this.state.click? 
        (<button onClick={this.handleUnclick}>Close</button>) : 
        (<button onClick={this.handleClick}>Add Recipe</button>) }
        {/*Form for adding recipes to recipes*/}
        {this.state.click? <Form />: null}
      </div>
    );
  }
}

export default App;
