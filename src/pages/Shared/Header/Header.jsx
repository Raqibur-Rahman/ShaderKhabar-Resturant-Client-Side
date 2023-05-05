import React from 'react';
import logo from '../../../assets/cooking.png';
import profileLogo from '../../../assets/user.png';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import MyComponent from '../../../MyComponent';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {

    return (
        <div>

            <Navbar className='justify-content-center' collapseOnSelect expand="lg" bg="light" variant="light">
                <div className='d-flex '>
                    <div><img src={logo} alt="" /></div>
                    <div>
                        <Navbar.Brand >
                            <Link to="/" className="text-decoration-none fw-bold fs-1 p-1 text-danger">ShaderKhabar</Link>

                        </Navbar.Brand>
                    </div>
                </div>
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto fw-semibold navbar">
                            <NavLink to="/" exact className="nav-link" activeClassName="active-nav-link">Home</NavLink>
                            <NavLink to="/chefs" className="nav-link" activeClassName="active-nav-link">Chefs</NavLink>
                            <NavLink to="/recipes" className="nav-link" activeClassName="active-nav-link">Recipes</NavLink>
                            <NavLink to="/recipesubmission" className="nav-link" activeClassName="active-nav-link">Submit a Recipe</NavLink>
                            <NavLink to="/blogs" className="nav-link" activeClassName="active-nav-link">Blogs</NavLink>
                            <NavLink to="/community" className="nav-link" activeClassName="active-nav-link">Join in Community</NavLink>
                            <NavLink to="/contact" className="nav-link" activeClassName="active-nav-link">Contact Us</NavLink>
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