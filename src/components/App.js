import React, {useState,useEffect} from "react";
import RecipeList from "./RecipeList";
import '../css/app.css';
import { v4 as uuidv4 } from 'uuid';
import RecipeEdit from "./RecipeEdit";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "CookingApp.recipes";
function App() {
  const [selectedRecipeId,setSelectedRecipeId] = useState();
  const [recipes,setRecipes] = useState(sampleRecipes);
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId);


  useEffect(() => 
  {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
    
  },[]);

  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes));
  },[recipes]);

  

  const RecipeContextValue = {
    handleAddRecipe,
    handleDeleteRecipe,
    handleSelectRecipe,
    handleChangeRecipe
  }

  function handleAddRecipe()
  {
    const newRecipe = {
        id: uuidv4(),
        name: 'New',
        servings : 1,
        cookTime: '1:00',
        instructions: 'instructs',
        ingredients: [
          {
            id: uuidv4(),
            name: "Name",
            amount: "1 Tbs"
          }
        ]
  
    }
  
    setRecipes([...recipes,newRecipe]);
  }
  function handleDeleteRecipe(id)
  {
      setRecipes(recipes.filter(recipe => recipe.id !== id));
  }
  function handleSelectRecipe(id) {
    setSelectedRecipeId(id);
  }
  function handleChangeRecipe(id,recipe){
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex(r => r.id == id);
    newRecipes[index] = recipe;

    setRecipes(newRecipes);
  }


  return (
    <RecipeContext.Provider value={RecipeContextValue} >
    <RecipeList recipes={recipes} />
    { selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
    </RecipeContext.Provider>
  )




}



const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id:1,
        name: "Chicken",
        amount: '2 Pounds'
      },
      {
        id:2,
        name: "Salt",
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Beef',
    servings: 5,
    cookTime: '2:45',
    instructions: "1. Put salt on Beef\n2. Put beef in oven\n3. Eat beef",
    ingredients: [
      {
        id:1,
        name: "Beef",
        amount: '3 Pounds'
      },
      {
        id:2,
        name: "Paprika",
        amount: '1.5 Tbs'
      }
    ]
  }
  

]

export default App;
