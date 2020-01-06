import React, { useEffect } from "react";
import config from "@root/config";
import { useAlert } from "@atoms/Alert/AlertProvider";
import AlertContainer from "@atoms/Alert/AlertContainer";
import NavBar from "@atoms/NavBar/NavBar";
import ScrollToTop from "@atoms/ScrollToTop/ScrollToTop";
import Hero from "@sections/Hero/Hero";
import AboutMe from "@sections/AboutMe/AboutMe";
import Portfolio from "@sections/Portfolio/Portfolio";
import Stats from "@sections/Stats/Stats";
import ContactMe from "@sections/ContactMe/ContactMe";
import Footer from "@sections/Footer/Footer";
import "./App.scss";

const App = () => {
  const { createAlert } = useAlert();
  useEffect(() => {
    if (!config || !config.underConstruction) return;
    const { enable, title, text, color, duration } = config.underConstruction;
    const alertBody = (
      <>
        <h4 className="alert-heading">{title}</h4>
        <p>{text}</p>
      </>
    );
    enable && createAlert({ color, body: alertBody, timeout: duration });
  }, [config.underConstruction]);
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
      <AlertContainer />
    </>
  );
};

export default App;
