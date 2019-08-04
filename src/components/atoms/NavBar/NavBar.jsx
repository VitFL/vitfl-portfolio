import React, { useState } from 'react';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
} from 'reactstrap';
import './NavBar.scss';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" className="mr-auto navbar-logo" />
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto text-monospace" navbar>
            <NavItem className="ml-3 my-auto main-nav-item">
              <NavLink href="#about" className="d-inline">
                About
              </NavLink>
            </NavItem>
            <NavItem className="ml-3 my-auto main-nav-item">
              <NavLink href="#work" className="d-inline">
                Work
              </NavLink>
            </NavItem>
            <NavItem className="ml-3 my-auto main-nav-item">
              <NavLink href="#contact" className="d-inline">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
