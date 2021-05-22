import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './Header/index';
import Footer from './Footer/index';

const App = () => (
  <>
    <Header title="Webová aplikace" />
    <Footer author="Martin Podloucký" />
  </>
);

render(<App />, document.querySelector('#app'));
