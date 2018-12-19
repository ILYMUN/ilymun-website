import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import {Navbar} from './Navbar.jsx';
import {Footer} from './Footer.jsx';

import {Home} from './Home.jsx';
import {PlainPage} from './PlainPage.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Route components are rendered if the path prop matches the current URL */}
        <Route exact path="/" component={Home}/>
        {/* <Route path="/category" component={Category}/> */}
        <Route path="/about" component={PlainPage}/>
        <Route path="/alt" render = {()=> (<p> I want this text to show up for all routes other than '/', '/products' and '/category' </p>)}/>
      </div>
    );
  }
}

export default App;
