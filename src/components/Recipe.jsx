import React,{useContext} from 'react';
import IngredientList from './IngredientList';
import { RecipeContext } from './App';

export default function Recipe(props) {
  const {name,servings,id,cookTime,instructions,ingredients} = props;
  const {handleDeleteRecipe} = useContext(RecipeContext);

  return <div className="recipe">
      <div className="header">
          <h3 className="heading">{name}</h3>
          <div>
              <button className="btn btn--primary ">Edit</button>
              <button onClick={() => handleDeleteRecipe(id)} className="btn btn--danger ">Delete</button>
          </div>
      </div>
      <div>
          <span className="label">Cook Time:</span>
          <span className="info">{cookTime}</span>
      </div>
      <div>
          <span className="label">Servings:</span>
          <span className="info">{servings}</span>
      </div>
      <div>
          <span className="label">Instructions:</span>
          <div className="info instructions">
              {instructions}
          </div>
      </div>
      <div>
          <span className="label">Ingredients:</span>
          <div className="info" >
              <IngredientList ingredients={ingredients} />
          </div>
      </div>
  </div>;
}
