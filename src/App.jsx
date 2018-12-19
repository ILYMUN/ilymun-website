import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import {Home} from './Home';
import {About} from './About';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Route components are rendered if the path prop matches the current URL */}
        <Route exact path="/" component={Home}/>
        {/* <Route path="/category" component={Category}/> */}
        <Route path="/about" component={About}/>
        <Route path="/alt" render = {()=> (<p> I want this text to show up for all routes other than '/', '/products' and '/category' </p>)}/>
      </div>
    );
  }
}

export default App;
