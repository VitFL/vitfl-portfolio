import React from 'react';
import NavBar from '@atoms/NavBar/NavBar';
import Hero from '@sections/Hero/Hero';
import AboutMe from '@sections/AboutMe/AboutMe';
import Portfolio from '@sections/Portfolio/Portfolio';
import Stats from '@sections/Stats/Stats';
import Footer from '@sections/Footer/Footer';
import './App.scss';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Stats />
      <Footer />
    </>
  );
}

export default App;
