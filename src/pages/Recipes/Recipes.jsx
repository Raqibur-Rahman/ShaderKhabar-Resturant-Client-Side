import React from 'react';
import { useEffect, useState } from 'react';
import './Recipe.css';
import RecipeCard from './RecipeCard';
import AllRecipes from './AllRecipes';


const Recipes = () => {
    const [chefData, setChefData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then((res) => res.json())
            .then((data) => setChefData(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="chef-container">
            <div className="chef-cards ">
                {chefData.map((chef) => (
                    <RecipeCard key={chef.chef_id} chef={chef} />
                    
                ))}
            </div>
        </div>
    )
};

export default Recipes;