import React, { useContext } from 'react';
import logo from '../../../assets/cooking.png';
import profileLogo from '../../../assets/user.png';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import MyComponent from '../../../MyComponent';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';


const Header = () => {

    const { user } = useContext(AuthContext);
    console.log('context ', user);
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
                            <Link to="/" exact className="nav-link" activeClassName="active-nav-link">Home</Link>
                            <Link to="/chefs" className="nav-link" activeClassName="active-nav-link">Chefs</Link>
                            <Link to="/recipes" className="nav-link" activeClassName="active-nav-link">Recipes</Link>
                            <Link to="/recipesubmission" className="nav-link" activeClassName="active-nav-link">Submit a Recipe</Link>
                            <Link to="/blogs" className="nav-link" activeClassName="active-nav-link">Blogs</Link>
                            <Link to="/community" className="nav-link" activeClassName="active-nav-link">Join in Community</Link>
                            <Link to="/contact" className="nav-link" activeClassName="active-nav-link">Contact Us</Link>
                        </Nav>

                        <Nav className='fw-semibold'>


                            {
                                user &&
                                <FaUserCircle style={{ fontSize: '3rem' }}></FaUserCircle>


                            }


                            {user ?
                                <button type="button" class="btn btn-secondary">Logout</button>
                                :
                                <Link to='/login'>
                                    <button type="button" class="btn btn-secondary">Login</button>
                                </Link>
                            }




                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;