import React from 'react';
import './Recipe.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const RecipeCard = (props) => {
    console.log('props', props.chef.chef_name);
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
            <Button variant="primary">View Recipes</Button>
        </Card.Body>
    </Card>
</div>
};

export default RecipeCard;