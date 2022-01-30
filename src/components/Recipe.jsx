import React from 'react';
import IngredientList from './IngredientList';
export default function Recipe({name,servings,cookTime,instructions,ingredients}) {
  return <div className="recipe">
      <div className="header">
          <h3 className="heading">{name}</h3>
          <div>
              <button className="btn btn--primary ">Edit</button>
              <button className="btn btn--danger ">Delete</button>
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
