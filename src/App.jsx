import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import {Home} from './Home';
import {About} from './About';
import {Committees} from './Committees';
import {ActionAssembly} from './ActionAssembly';
import {InternationalCourtOfJustice} from './InternationalCourtOfJustice';
import {NotFound} from './NotFound';

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
        <Switch>
          {/* Route components are rendered if the path prop matches the current URL */}
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/committees" component={Committees}/>
          <Route path="/action-assembly" component={ActionAssembly}/>
          <Route path="/international-court-of-justice" component={InternationalCourtOfJustice}/>
          <Route component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;
