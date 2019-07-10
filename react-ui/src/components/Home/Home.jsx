import React /* , { useCallback, useEffect, useState } */ from 'react';
import Hero from './sections/Hero/Hero';
import AboutMe from './sections/AboutMe/AboutMe';
import Portfolio from './sections/Portfolio/Portfolio';

function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Portfolio />
    </>
  );
}

export default Home;
