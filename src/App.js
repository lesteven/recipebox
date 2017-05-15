import React, { Component } from 'react';
import Table from './components/table';
import Form from './components/form';
import EditForm from './components/editForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      editKey:'',
      click:false,
      edit:false,
      editTitle:'',
      editIngred:'',
      recipeTitle:'',
      recipeIngred:'',
      recipesArray:[{'title':'oranges','ingred':[10,'bread']},{'title':'apples','ingred':['duh','whatever','lala']}]
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleUnclick = this.handleUnclick.bind(this);

    this.titleChange = this.titleChange.bind(this);
    this.ingredChange = this.ingredChange.bind(this);

    this.updateTitle = this.updateTitle.bind(this);
    this.updateIngred = this.updateIngred.bind(this);

    this.addRecipe = this.addRecipe.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
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
  updateTitle(event){
    this.setState({editTitle:event.target.value})
  }
  updateIngred(event){
    this.setState({editIngred:event.target.value})
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

    console.log(this.state.recipesArray)
    
  }
  editRecipe(key){
    this.setState({edit:true})
    const arr = this.state.recipesArray.slice();
    const element = arr.splice(key, 1)
    
    this.setState({editTitle:element[0].title,
    editIngred:element[0].ingred,editKey:key})
  }
  updateRecipe(){
   
    this.setState({edit:false})
    const arr = this.state.recipesArray.slice();
    arr.splice(this.state.editKey,1);

    let ingred = this.state.editIngred;
    Array.isArray(ingred)? ingred = ingred.join().split(','): 
    ingred=ingred.split(',');
    const add={
      'title': this.state.editTitle,
      'ingred': ingred
    }
    arr.splice(this.state.editKey,0,add)
    this.setState({recipesArray:arr})
  }
  componentWillMount(){
    const storage = localStorage.getItem('recipes');
    if(storage==null){
      localStorage.setItem('recipes',JSON.stringify(this.state.recipesArray))
    }
    else{
      localStorage.setItem('recipes',storage)
      this.setState({recipesArray:JSON.parse(storage)})
    }
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
        {this.state.edit?<EditForm
          updateTitle={this.updateTitle}
          updateIngred={this.updateIngred}
          editTitle={this.state.editTitle}
          editIngred={this.state.editIngred}
          updateRecipe={this.updateRecipe}
          />:null}
      </div>
    );
  }
}

export default App;
