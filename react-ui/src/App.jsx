import React, { useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useMappedState } from 'redux-react-hook';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import NavBar from './components/Home/NavBar/NavBar';
import Footer from './components/Home/sections/Footer/Footer';
import useWithAuthenticate from './components/WithAuthenticate/WithAuthenticate';
import * as routes from './constants/routes';
import './App.scss';

function App() {
  useWithAuthenticate();

  const mapState = useCallback(
    state => ({
      loading: state.sessionState.loading,
    }),
    [],
  );

  const { loading } = useMappedState(mapState);

  if (loading) return <h1>Loading...</h1>;

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Switch>
        <Route exact path={routes.HOME} component={() => <Home />} />
        <Route exact path={routes.SIGN_UP} component={() => <Signup />} />
        <Route exact path={routes.LOGIN} component={() => <Login />} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
