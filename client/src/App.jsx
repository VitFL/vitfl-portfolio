import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import config from "@root/config";
import { useAlert } from "@components/Alert/AlertProvider";
import AlertContainer from "@components/Alert/AlertContainer";

import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
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
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      <AlertContainer />
    </BrowserRouter>
  );
};

export default App;
