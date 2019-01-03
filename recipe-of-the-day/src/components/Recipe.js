import React from 'react';


const Recipe = (props) => {
    const allRecipes = props.recipes;
    console.log(allRecipes);
    return (
        <div className="Recipe">
            <h3>Name: {allRecipes.name}</h3>
            <h3>Servings: {allRecipes.servings}</h3>
            <h3>Category: {allRecipes.category}</h3>
        </div>
    )
}

export default Recipe;