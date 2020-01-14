import React from "react";
import NavBar from "@components/NavBar/NavBar";
import ScrollToTop from "@components/ScrollToTop/ScrollToTop";
import Hero from "./sections/Hero/Hero";
import AboutMe from "./sections/AboutMe/AboutMe";
import Portfolio from "./sections/Portfolio/Portfolio";
import Stats from "./sections/Stats/Stats";
import ContactMe from "./sections/ContactMe/ContactMe";
import Footer from "./sections/Footer/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Stats />
      <ContactMe />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
