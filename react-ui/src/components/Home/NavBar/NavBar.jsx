import React, { useState, useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import * as routes from '../../../constants/routes';
import UserNavIcon from './UserNavIcon/UserNavIcon';
import './NavBar.scss';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  const mapState = useCallback(
    state => ({
      authUser: state.sessionState.authUser,
    }),
    [],
  );
  const { authUser } = useMappedState(mapState);
  console.log(authUser);
  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href={routes.HOME} className="mr-auto navbar-logo" />
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
            <NavItem className="my-auto ml-4">
              <UserNavIcon authUser={authUser} />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
