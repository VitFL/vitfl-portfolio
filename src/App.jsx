import React, { useEffect } from "react";
import NavBar from "@atoms/NavBar/NavBar";
import ScrollToTop from "@atoms/ScrollToTop/ScrollToTop";
import Hero from "@sections/Hero/Hero";
import AboutMe from "@sections/AboutMe/AboutMe";
import Portfolio from "@sections/Portfolio/Portfolio";
import Stats from "@sections/Stats/Stats";
import Footer from "@sections/Footer/Footer";
import { useAlert } from "@atoms/Alert/AlertProvider";
import AlertContainer from "@atoms/Alert/AlertContainer";
import "./App.scss";

const App = () => {
  const { createAlert } = useAlert();
  useEffect(() => {
    const alertBody = (
      <>
        <h4 className="alert-heading">Website Is Under Development</h4>
        <p>
          I'm still working on this website, so please understand if you come
          across anything that's broken or incomplete.
        </p>
      </>
    );
    createAlert({ color: "dark", body: alertBody, timeout: 6000 });
  }, []);
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Stats />
      <Footer />
      <ScrollToTop />
      <AlertContainer />
    </>
  );
};

export default App;
