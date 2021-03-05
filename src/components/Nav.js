import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar  className="navbar my-4 pb-3">
        <Nav className="flex-wrap justify-content-around">
          <Nav.Link href="#about" className="link-style" >About Me</Nav.Link>
          <Nav.Link href="#portfolio" className="link-style ">Portfolio</Nav.Link>
          <Nav.Link href="#contact" className="link-style ">Contact Me</Nav.Link>
          <Nav.Link href="#resume" className="link-style ">Resume</Nav.Link>
        </Nav>
    </Navbar>
  );
}

export default Navigation;