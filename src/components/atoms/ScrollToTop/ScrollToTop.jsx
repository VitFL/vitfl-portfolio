import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { arrowUp2 } from 'react-icons-kit/icomoon/arrowUp2';

const ScrollToTop = () => {
  const Button = styled.div`
    position: fixed;
    bottom: 25px;
    right: -55px;
    background-color: var(--light);
    -webkit-border-radius: 0.2em;
    border-radius: 0.2em;
    color: #fff;
    font-size: 26px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    opacity: 0.2;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: var(--accent);
      opacity: 0.5;
    }
    &.active {
      right: 25px;
    }
  `;

  const buttonRef = React.createRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > document.documentElement.clientHeight / 2) {
        buttonRef.current.classList.add('active');
      } else {
        buttonRef.current.classList.remove('active');
      }
    });
  }, []);

  return (
    <Button ref={buttonRef} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <Icon icon={arrowUp2} size={32} />
    </Button>
  );
};

export default ScrollToTop;
