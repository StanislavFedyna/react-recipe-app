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

    this.setState({
      activeRecipe: res.recipes[0]
    });
  }
  render(){
    const {image_url, title, publisher} = this.state.activeRecipe;

    return(
      <div class="container">
        <div class="active-recipe">
          <img className="active-recipe__img" src={ image_url } alt={ title }/>
          <h3 className="active-recipe__title">{ title }</h3>
          <h4 className="active-recipe__publisher">Publisher: <span>{ publisher }</span></h4>
          
        </div>
      </div>
    )
  }
}

export default Recipe;