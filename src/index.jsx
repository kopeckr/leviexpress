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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/reservation">
          <Reservation />
        </Route>
      </Switch>
      <Footer author="Martin Podloucký" />
    </Router>
  </>
);

render(<App />, document.querySelector('#app'));
