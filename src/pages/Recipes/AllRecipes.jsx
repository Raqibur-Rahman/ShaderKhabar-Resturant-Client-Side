import React from 'react';
import { useEffect, useState } from 'react';
import './Recipe.css';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import './Recipe.css';

const AllRecipes = () => {
    const [chefData, setChefData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then((res) => res.json())
            .then((data) => setChefData(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h3 className='text-center'>All Recipes</h3>
            {chefData.map((chef) => (
                <div key={chef.chef_id}>
                    {chef.recipes.map((recipe) => (
                        <Card key={recipe.recipe_name} className="recipe-card m-3 p-3 back">
                            <Card.Img variant="top" src={recipe.recipe_image} style={{ width: '300px', height: '300px' }} />
                            <Card.Body>
                                <Card.Title> <span className="fw-bold">{recipe.recipe_name}</span> </Card.Title>
                                <Card.Text>
                                    <span className="fw-semibold">Ingredients: </span> <br /> {recipe.ingredients.join(", ")}
                                </Card.Text>
                                <Card.Text>
                                    <span className="fw-semibold">Cooking Method: </span> <br /> {recipe.cooking_method}
                                </Card.Text>
                                <Card.Text>
                                    <span className="fw-semibold">Recipe Rating: </span> <br /> {recipe.rating}
                                </Card.Text>
                                <Button variant="primary">Add as Favorite</Button>

                            </Card.Body>
                        </Card>
                    ))}
                </div>
            ))}
        </div>
    );
};


export default AllRecipes;