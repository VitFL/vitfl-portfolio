import React, { useState } from 'react';
import * as links from '@constants/links';
import './NavBar.scss';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  const triggers = document.querySelectorAll('.main-nav__item, .hamburger');

  Array.from(triggers).forEach((link) => {
    link.addEventListener('click', () => {
      document.querySelector('.hamburger').classList.toggle('active');
      document.querySelector('.main-nav__list').classList.toggle('open');
    });
  });


  return (
    <nav id="main-nav">
      <div id="menu-button" className="hamburger"><span /></div>
      <ul className="main-nav__list">
        <li className="main-nav__item"><a href="#about">About</a></li>
        <li className="main-nav__item"><a href="#work">Work</a></li>
        <li className="main-nav__item"><a href="#stats">My activity stats</a></li>
        <li className="main-nav__item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    // <>
    //   <Navbar color="dark" dark expand="md">
    //     <NavbarBrand href="/" className="mr-auto navbar-logo" />
    //     <NavbarToggler onClick={toggleNavbar} className="mr-2" />
    //     <Collapse isOpen={isOpen} navbar>
    //       <Nav className="ml-auto text-monospace" navbar>
    //         <NavItem className="ml-3 my-auto main-nav-item">
    //           <NavLink href="#about" className="d-inline">
    //             About
    //           </NavLink>
    //         </NavItem>
    //         <NavItem className="ml-3 my-auto main-nav-item">
    //           <NavLink href="#work" className="d-inline">
    //             Work
    //           </NavLink>
    //         </NavItem>
    //         <NavItem className="ml-3 my-auto main-nav-item">
    //           <NavLink href="#stats" className="d-inline">
    //             My activity stats
    //           </NavLink>
    //         </NavItem>
    //         <NavItem className="ml-3 my-auto main-nav-item">
    //           <NavLink href="#contact" className="d-inline">
    //             Contact
    //           </NavLink>
    //         </NavItem>
    //         <NavItem className="my-auto ml-4">
    //           <a
    //             href={links.cv}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="btn btn-outline-accent btn-sm"
    //           >
    //             RESUME
    //           </a>
    //         </NavItem>
    //       </Nav>
    //     </Collapse>
    //   </Navbar>
    // </>
  );
};

export default NavBar;
