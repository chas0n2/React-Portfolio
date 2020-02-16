import React from 'react';
import './nav.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';



function NavIndex () {
    return (
      <Navbar className="nav" fixed="top" expand="lg" variant="dark" bg="dark">
      <Container>
      <Navbar.Brand href="#">Chason Law</Navbar.Brand>
      </Container>
      <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
      </Nav>
      </Navbar>
    )
};

export default NavIndex;