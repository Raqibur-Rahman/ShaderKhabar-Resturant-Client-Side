import React from 'react';
import { Carousel } from 'react-bootstrap';
import biriyani from '../../../assets/biriyani.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <Carousel>
        <Carousel.Item>
          <div className="carousel-image-overlay">
            <img
              className="d-block w-100"
              src={biriyani}
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h3 >Discover Authentic Bangladeshi Recipes</h3>
            <p>Explore the rich flavors and spices of Bangladesh with our hand-picked selection of recipes from top chefs.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-overlay">
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Cook Like a Pro with ShaderKhabar</h3>
            <p>Find step-by-step instructions and tips from the pros to create mouth-watering dishes that will impress your guests.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-overlay">
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Join Our Community of Food Lovers</h3>
            <p>Share your favorite Bangladeshi recipes, connect with fellow foodies, and discover new dishes to try.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
