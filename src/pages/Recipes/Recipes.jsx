import React, { useEffect, useState } from 'react';
import './Recipe.css';
import RecipeCard from './RecipeCard';

const Recipes = () => {
    const [chefData, setChefData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then((res) => res.json())
            .then((data) => {
                setChefData(data);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="container">
            {loading && (
                <div className="spinner-container">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            {!loading && (
                <div className="chef-container">
                    <div className="chef-cards">
                        {chefData.map((chef) => (
                            <RecipeCard key={chef.chef_id} chef={chef} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Recipes;
