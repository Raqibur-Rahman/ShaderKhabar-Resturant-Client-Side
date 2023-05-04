import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ChefCard.css';
import { Link } from 'react-router-dom';

const ChefCard = (props) => {
    const handelViewRecipes = () => {
        console.log("clicked Id");
    }
    return (
        <div className="chef-card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.chef.chef_picture} />
                <Card.Body>
                    <Card.Title>
                        <strong>{props.chef.chef_name}</strong>
                    </Card.Title>
                    <Card.Text>

                        <span className="fw-semibold">Years of experience: </span>
                        {props.chef.years_of_experience}
                        <br />

                        <span className="fw-semibold">Number of recipes: </span>
                        {props.chef.recipes.length}

                        <br />
                        <span className="fw-semibold">Likes: </span>
                        {props.chef.Likes}
                        <br />

                    </Card.Text>
                    <Link to={`/chefs/${props.chef.chef_id}`}>
                        <Button variant="primary">
                            <span className='text-white text-decoration-none fw-bold'>View Recipes</span>
                        </Button>
                    </Link>


                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefCard;
