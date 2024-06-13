import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar({ logout }) {
  return (<Navbar expand="lg" className="mb-4 bg-dark">
    <Container>
      <Navbar.Brand href="/" className="text-light fs-3 ">Trainer App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100">

          <Nav.Link href="/client" className="text-light mx-2">Home</Nav.Link>
          <Nav.Link href="/workoutbuilder" className="text-light mx-2">Workout Builder</Nav.Link>
          <Nav.Link href="/library" className="text-light">Exercise Library</Nav.Link>

          <Nav.Item className="ms-auto">
            <Nav.Link href="/" onClick={logout} className="text-light mx-2">Logout</Nav.Link>
          </Nav.Item>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;