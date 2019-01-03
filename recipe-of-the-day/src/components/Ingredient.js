import React from 'react';


const Ingredient = (props) => {
    const ingredients = props.ingredient;
    //console.log(ingredients);
    return (
        <div className="Ingredient">
            <ul>
                <li>Ingredient: {ingredients.ingredient}</li>
                <li>Amount: {ingredients.amount}</li>
            </ul>
        </div>
    )
}

export default Ingredient;