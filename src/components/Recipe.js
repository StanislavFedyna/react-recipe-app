import React from 'react';

const API_KEY = '825dad3cfb6f1dc728d3aa14a86393af';

class Recipe extends React.Component{
  state = {
    activeRecipe: []
  }

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(`https://cors-anywhere.herokuapp.com/https://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    const res = await req.json();

    console.log(res)
  }
  render(){
    return(

      <div>Recipe Component</div>
    )
  }
}

export default Recipe;