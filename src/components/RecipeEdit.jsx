import React , {useContext} from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit';
import { RecipeContext } from './App';
export default function RecipeEdit({recipe}) {

    const {handleChangeRecipe} = useContext(RecipeContext);
    function handleChange(changes) {
        handleChangeRecipe(recipe.id,{...recipe,...changes});
    }
    function handleIngredientChange(id,ingredient) {
        const newIngredient = [...recipe.ingredients];
    const index = newIngredient.findIndex(i => i.id == id);
    newIngredient[index] = ingredient;

    handleChange({ingredients : newIngredient});
    }

  return <div className="recipe-edit">
      <div className="recipe-edit__remove-btn-container">
          <button className="btn recipe-edit__remove-btn">&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
          <label htmlFor="name" className="label">Name:</label>
          <input type="text" onInput={e => handleChange({name: e.target.value})} name="name" id="name" className="recipe-edit__input" value={recipe.name}/>

          <label htmlFor="cooktime" className="label">Cook Time:</label>
          <input type="text" onInput={e => handleChange({cookTime: e.target.value})} name="cooktime" id="cooktime" className="recipe-edit__input" value={recipe.cookTime} />

          <label htmlFor="servings" className="label">Servings:</label>
          <input type="number" onInput={e => handleChange({servings: parseInt(e.target.value) || ''})} min="1" name="servings" id="servings" className="recipe-edit__input" value={recipe.servings} />

          <label htmlFor="instructions" className="label">Instructions:</label>
          <textarea type="text" onInput={e => handleChange({instructions: e.target.value})} name="instructions" id="instructions" className="recipe-edit__input" value={recipe.instructions}/>
      </div>
      <br/>
      <label className="label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
          <div>Name</div>
          <div>Amount</div>
          <div></div>
          {
          recipe.ingredients.map(ingr => 
          <RecipeIngredientEdit
           key={ingr.id}
           ingredient={ingr} 
          handleIngredientChange={handleIngredientChange}
          />
          )
          }
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
          <button className="btn btn--primary">Add Ingredient</button>
      </div>
  </div>;
}
