import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-info-subtle py-5">

      <Container>
        <Row className="justify-content-center">
          <Col md={4} sm={12} className="mb-4 mb-md-0">
            <h5>About ShaderKhabar</h5>
            <p className="text-muted">ShaderKhabar is a website dedicated to showcasing recipes from all available chefs. Our mission is to provide a platform for chefs to share their expertise and for food lovers to discover new and exciting dishes.</p>
            <ul className="list-unstyled social-links mt-3">
              <li><Link to="#"><FaLinkedin /> Connect us on LinkedIn</Link></li>
              <li><Link to="#"><FaTwitter /> Follow us on Twitter</Link></li>
              <li><Link to="#"><FaInstagram /> Follow us on Instagram</Link></li>
            </ul>
          </Col>
          <Col md={4} sm={12} className="mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="#">Home</Link></li>
              <li><Link to="#">Recipes</Link></li>
              <li><Link to="#">Chefs</Link></li>
              <li><Link to="#">Contact Us</Link></li>
            </ul>
          </Col>
          <Col md={4} sm={12} className="mb-4 mb-md-0">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><FaMapMarkerAlt /> 123 Main Street, Dhaka, Bangladesh</li>
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
            <ul className="list-unstyled d-flex justify-content-md-end">
              <li className="me-md-3"><Link to="#">Terms of Use</Link></li>
              <li className="me-md-3"><Link to="#">Privacy Policy</Link></li>
              <li className="me-md-3"><Link to="#">Cookie Policy</Link></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
