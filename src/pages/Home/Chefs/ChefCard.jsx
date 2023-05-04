import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ChefCard = (chef) => {
    //<span className='fw-semibold'></span> 
    // console.log("this is chef ", chef);
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={chef.chef.chef_picture} />
                <Card.Body>
                    <Card.Title> <strong>{chef.chef.chef_name}</strong> </Card.Title>
                    <Card.Text>
                        <p> <span className='fw-semibold'>Years of experience: </span> {chef.chef.years_of_experience} </p>
                        <p><span className='fw-semibold'>Numbers of recipes: </span>${(chef.chef.recipes).length} </p>
                        <p><span className='fw-semibold'>Likes: </span>{chef.chef.Likes}</p>
                    </Card.Text>
                    <Button variant="primary">View Recipes </Button>
                </Card.Body>
            </Card>



        </div>
    );
};

export default ChefCard;