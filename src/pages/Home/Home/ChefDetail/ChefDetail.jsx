import React from 'react';
import { useParams } from 'react-router-dom';
import Recipes from '../../../Recipes/Recipes';
import RecipeCard from '../../../Recipes/RecipeCard';

const ChefDetail = () => {
    const {id} = useParams();
    return (
        <div>
            <Recipes></Recipes>
        </div>
    );
};

export default ChefDetail;