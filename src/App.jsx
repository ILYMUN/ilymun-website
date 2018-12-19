import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
// import './responsive.css';

import {Navbar} from './Navbar.jsx';

import {Home} from './Home.jsx';

import {Footer} from './Footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
