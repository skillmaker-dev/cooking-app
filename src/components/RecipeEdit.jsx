import React from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit';

export default function RecipeEdit() {
  return <div className="recipe-edit">
      <div className="recipe-edit__remove-btn-container">
          <button className="btn recipe-edit__remove-btn">&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
          <label htmlFor="name" className="label">Name:</label>
          <input type="text" name="name" id="name" className="recipe-edit__input"/>

          <label htmlFor="cooktime" className="label">Cook Time:</label>
          <input type="text" name="cooktime" id="cooktime" className="recipe-edit__input" />

          <label htmlFor="servings" className="label">Servings:</label>
          <input type="number" min="1" name="servings" id="servings" className="recipe-edit__input" />

          <label htmlFor="instructions" className="label">Instructions:</label>
          <textarea type="text" name="instructions" id="instructions" className="recipe-edit__input" />
      </div>
      <br/>
      <label className="label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
          <div>Name</div>
          <div>Amount</div>
          <div></div>
          <RecipeIngredientEdit />
          <RecipeIngredientEdit />
          {/* Ingredients component */}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
          <button className="btn btn--primary">Add Ingredient</button>
      </div>
  </div>;
}