import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import {Home} from './Home';
import {About} from './About';

/* CSS Files */
import './wp-content/themes/ilymun-wp-theme/css/bootstrap.min.css';
import './wp-content/themes/ilymun-wp-theme/css/application.css';
import './wp-content/themes/ilymun-wp-theme/css/navbar.css';
import './wp-content/themes/ilymun-wp-theme/css/loader.css';
import './wp-content/themes/ilymun-wp-theme/css/landing/style.css';
import './wp-content/themes/ilymun-wp-theme/css/landing/responsive.css';

import "./wp-content/themes/ilymun-wp-theme/css/revolution/settings.css";
import "./wp-content/themes/ilymun-wp-theme/css/revolution/layers.css";
import "./wp-content/themes/ilymun-wp-theme/css/revolution/navigation.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Route components are rendered if the path prop matches the current URL */}
        <Route exact path="/" component={Home}/>
        {/* <Route path="/category" component={Category}/> */}
        <Route path="/about" component={About}/>
        <Route component={() => (<div>404 Not found </div>)} />
        {/* <Route path="/alt" render = {()=> (<p> I want this text to show up for all routes other than '/', '/products' and '/category' </p>)}/> */}
      </div>
    );
  }
}

export default App;
