import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface NavbarProps {
    isAuth: boolean;  
}

const Navigation: React.FC<NavbarProps> = ({ isAuth }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">Chatter</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    { !isAuth ? (
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    ) : (
                        <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                    )}
                    <Nav.Link as={Link} to="/create">Create Post</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
