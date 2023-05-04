import React from 'react';
import Banner from './Banner';
import Chefs from '../Chefs/Chefs';
import Recipes from '../../Recipes/Recipes';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Banner></Banner>
            <Chefs></Chefs>
            {/* <Recipes></Recipes> */}
        </div>
    );
};

export default Home;