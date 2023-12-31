import React, { useState } from 'react';
import './Recipe.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';

const RecipeCard = (props) => {

    const { id } = useParams();
    console.log("id is ", id);
    console.log(props);

    const [buttonClicked, setButtonClicked] = useState(Array(props.chef.recipes.length).fill(false));

    const handleButtonClick = (index) => {
        const newButtonClicked = [...buttonClicked];
        newButtonClicked[index] = true;
        setButtonClicked(newButtonClicked);
    }

    if (props.chef.chef_id === Number(id)) {
        return (
            <div>
                <div className="banner-container">
                    <h2 className='text-center'>{props.chef.chef_name}</h2>
                    <img style={{ width: '300px', height: '300px' }} src={props.chef.chef_picture} alt={props.chef.chef_name} className="banner-picture" />
                    <div className="banner-text">

                        <p>{props.chef.bio}</p>
                        <div className="banner-stats">
                            <span className="fw-semibold">Years of experience: </span>
                            {props.chef.years_of_experience}
                            <br />

                            <span className="fw-semibold">Number of recipes: </span>
                            {props.chef.recipes.length}

                            <br />
                            <span className="fw-semibold">Likes: </span>
                            {props.chef.Likes}
                            <br />
                        </div>
                    </div>
                </div>

                <div className='chef-cards'>

                    {props.chef.recipes.map((recipe, index) => (

                        <Card className='recipe-card' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={recipe.recipe_image} />
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
                                <Button variant="primary" disabled={buttonClicked[index]} onClick={() => handleButtonClick(index)}>Add as Favorite</Button>
                            </Card.Body>
                        </Card>

                    ))}

                </div>

                <Toast className="favorite-toast bg-success" onClose={() => setButtonClicked(Array(props.chef.recipes.length).fill(false))} show={buttonClicked.includes(true)} autohide style={{ position: 'fixed', top: '50%', right: '0', transform: 'translateY(-50%)' }}>
                    <Toast.Header>
                        <strong className="me-auto fw-bold">Favorite Recipe</strong>
                    </Toast.Header>
                    <Toast.Body>This recipe has been added to your favorites!</Toast.Body>
                </Toast>

            </div>
        )
    } else {
        return null;
    }
};

export default RecipeCard;
