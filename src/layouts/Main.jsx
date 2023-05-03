import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';


const Main = () => {
    return (
        <div>
            <Header></Header>

            <Container>

                <Row>
                    <Col lg={3}>
                        <h3>left bar</h3>
                    </Col>

                    <Col lg={6}>
                        <h3>Main content coming...</h3>
                    </Col>

                    <Col lg={3}>
                    <h3>right bar</h3>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>

        </div>
    );
};

export default Main;