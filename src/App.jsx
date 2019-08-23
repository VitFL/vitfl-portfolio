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
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
      </>
    );
    createAlert({ color: "info", body: alertBody, timeout: 5000 });
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
