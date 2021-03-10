import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// renders Navigation bar. handlePageChange is a state setter passed down from App
function Navigation(props) {
  const { handlePageChange } = props;
  return (
    <Navbar className="navbar my-4 pb-3">
      <Nav className="flex-wrap justify-content-around">
        <Nav.Link
          href="#about"
          className="link-style"
          // on click render about
          onClick={() => {
            handlePageChange('About');
          }}
        >
          About Me
        </Nav.Link>
        <Nav.Link
          href="#portfolio"
          className="link-style"
          // on click render Portfolio
          onClick={() => {
            handlePageChange('Portfolio');
          }}
        >
          Portfolio
        </Nav.Link>
        <Nav.Link
          href="#contact"
          className="link-style"
          // on click render contact
          onClick={() => {
            handlePageChange('Contact');
          }}
        >
          Contact Me
        </Nav.Link>
        <Nav.Link
          href="#resume"
          className="link-style"
          // on click render resume
          onClick={() => {
            handlePageChange('Resume');
          }}
        >
          Resume
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
