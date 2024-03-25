//import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to='/'>Food News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link to='/'>Home</Link> </Nav.Link>
            <Nav.Link href="#link">All News</Nav.Link>
            <NavDropdown title="Favourites" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Healthy Food</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Diet Food
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vegetarians</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Food For Pujas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;