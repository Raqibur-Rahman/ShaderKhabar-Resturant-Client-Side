import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Home from '../pages/Home/Home/Home';


const Main = () => {
    return (
        <div>
            <Header></Header>

            <Home></Home>

            <Footer></Footer>

        </div>
    );
};

export default Main;