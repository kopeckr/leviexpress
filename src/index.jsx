import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './style.css';

import Header from './Header/index';
import Footer from './Footer/index';
import Home from './Home/index';
import Reservation from './Reservation/index';

const App = () => (
  <>
    <Router>
      <Header title="Webová aplikace" />
      <Link to="/">Home</Link>
      <Link to="/reservation">Reservation</Link>
      <Switch>
        <Route path="/a"> </Route>
        <Route path="/reservation"> </Route>
      </Switch>
      <Footer author="Martin Podloucký" />
    </Router>
  </>
);

render(<App />, document.querySelector('#app'));
