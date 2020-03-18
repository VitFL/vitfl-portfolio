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
      document.querySelector('.main-nav__list-container').classList.toggle('open');
    });
  });


  return (
    <nav id="main-nav">
      <div id="menu-button" className="hamburger"><span /></div>
      <div className="main-nav__list-container">
        <ul className="main-nav__list">
          <li className="main-nav__item"><a href="#about">About</a></li>
          <li className="main-nav__item"><a href="#work">Work</a></li>
          <li className="main-nav__item"><a href="#stats">My activity stats</a></li>
          <li className="main-nav__item"><a href="#contact">Contact</a></li>
          <a
            href={links.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-accent btn-sm"
          >
            RESUME
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
