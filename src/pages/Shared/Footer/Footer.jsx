import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-info-subtle py-5">

            <div className='d-lg-flex justify-content-between'>

                <div>
                    <h5>About ShaderKhabar</h5>
                    <p className="text-muted">ShaderKhabar is a platform <br /> for chefs to share recipes and for food enthusiasts to discover new dishes.</p>
                    <ul className="list-unstyled social-links mt-3">
                        <li><a href="#"><FaLinkedin /> Connect us on LinkedIn</a></li>
                        <li><a href="#"><FaTwitter /> Follow us on Twitter</a></li>
                        <li><a href="#"><FaInstagram /> Follow us on Instagram</a></li>
                    </ul>
                </div>

                <div>

                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Recipes</a></li>
                        <li><a href="#">Chefs</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>

                </div>


                <div>

                    <h5>Contact Us</h5>
                    <ul className="list-unstyled">
                        <li><FaMapMarkerAlt /> 123 Main Street, Anytown USA</li>
                        <li><FaEnvelope /> info@shaderkhabar.com</li>
                        <li><FaPhone /> 555-555-5555</li>
                    </ul>

                </div>


            </div>

            <div>
                <p className="mb-0">&copy; 2023 ShaderKhabar. All rights reserved.</p>
                <ul className="list-unstyled">
                    <li className="d-inline-block me-3"><a href="#">Terms of Use</a></li>
                    <li className="d-inline-block me-3"><a href="#">Privacy Policy</a></li>
                    <li className="d-inline-block me-3"><a href="#">Cookie Policy</a></li>
                </ul>
            </div>






            {/* <Container>
                <Row className="justify-content-center">
                    <Col md={4} sm={12} className="mb-4 mb-md-0">
                        <h5>About updated ShaderKhabar</h5>
                        <p className="text-muted">ShaderKhabar is a website dedicated to showcasing recipes from all available chefs. Our mission is to provide a platform for chefs to share their expertise and for food lovers to discover new and exciting dishes.</p>
                        <ul className="list-unstyled social-links mt-3">
                            <li><a href="#"><FaLinkedin /> Connect us on LinkedIn</a></li>
                            <li><a href="#"><FaTwitter /> Follow us on Twitter</a></li>
                            <li><a href="#"><FaInstagram /> Follow us on Instagram</a></li>
                        </ul>
                    </Col>
                    <Col md={4} sm={12} className="mb-4 mb-md-0">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Recipes</a></li>
                            <li><a href="#">Chefs</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col md={4} sm={12} className="mb-4 mb-md-0">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li><FaMapMarkerAlt /> 123 Main Street, Anytown USA</li>
                            <li><FaEnvelope /> info@shaderkhabar.com</li>
                            <li><FaPhone /> 555-555-5555</li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                        <p className="mb-0">&copy; 2023 ShaderKhabar. All rights reserved.</p>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <ul className="list-unstyled">
                            <li className="d-inline-block me-3"><a href="#">Terms of Use</a></li>
                            <li className="d-inline-block me-3"><a href="#">Privacy Policy</a></li>
                            <li className="d-inline-block me-3"><a href="#">Cookie Policy</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container> */}
        </footer>
    );
};

export default Footer;
