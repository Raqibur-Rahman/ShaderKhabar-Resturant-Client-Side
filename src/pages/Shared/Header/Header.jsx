import React from 'react';
import logo from '../../../assets/cooking.png';
import profileLogo from '../../../assets/user.png';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import MyComponent from '../../../MyComponent';
import { Popover, OverlayTrigger } from 'react-bootstrap';

const Header = () => {

    return (
        <div>

            <Navbar className='justify-content-center' collapseOnSelect expand="lg" bg="light" variant="light">
                <div className='d-flex '>
                    <div><img src={logo} alt="" /></div>
                    <div>
                        <Navbar.Brand href="#home" className='fw-bold fs-1 p-1 text-danger'>ShaderKhabar</Navbar.Brand>
                    </div>
                </div>
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto fw-semibold navbar">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/recipes" className="nav-link">Recipes</Link>
                            <Link to="/chefs" className="nav-link">Chefs</Link>
                            <Link to="/recipesubmission" className="nav-link">Submit a Recipe</Link>
                            <Link to="/blogs" className="nav-link">Blogs</Link>
                            <Link to="/community" className="nav-link">Join in Community</Link>
                            <Link to="/contact" className="nav-link">Contact Us</Link>
                        </Nav>

                        <Nav className='fw-semibold'>

                            <button className='border border-0 p-0 m-0'>
                                <img src={profileLogo} alt="" />
                            </button>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;