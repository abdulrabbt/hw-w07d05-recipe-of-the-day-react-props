import React, { Component } from 'react';
import recipes from '../data/recipes';
import Recipe from './Recipe';

class Recipes extends Component {

    renderRecipes() {
        const allRecipes = recipes.map((el, index) => {
            return (
                <Recipe recipes={el} key={index}/>
            );
        });
        return allRecipes;
    }

    render() {
        return (
            <div className="Recipes">
                <h1 className="title">Recipes</h1>
                {this.renderRecipes()};
            </div>
        );
    }
}

export default Recipes;
