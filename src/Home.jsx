import React, {Component} from 'react';
import ScriptTag from 'react-script-tag';

import {LandingSlider} from './LandingSlider';
import {LandingAbout} from './LandingAbout';
import {LandingParallax} from './LandingParallax';
import {LandingValues} from './LandingValues';
import {LandingTeam} from './LandingTeam';
import {CountDownParallax} from './CountDownParallax';
import {LandingQuotes} from './LandingQuotes';
import {LandingPress} from './LandingPress';
import {LandingPartners} from './LandingPartners';
import {Contact} from './Contact';
import {Map} from './Map';

import {Navbar} from './Navbar.jsx';
import {Footer} from './Footer.jsx';

export class Home extends Component {

  constructor(props) {
    super(props)
    this.loadedScripts = [];
  }

  loadScript(src) {
    const script = document.createElement("script");
    script.src = src; //+ '?cachebuster='+ new Date().getTime();
    script.async = false;
    this.loadedScripts.push(script);
    document.body.appendChild(script);
  }

  componentDidMount() {
    // Makes sure that when a plainPage is mounted for the first time through 
    // a router it scrolls to the top.
    window.scrollTo(0, 0);

    this.loadScript("./wp-content/themes/ilymun-wp-theme/js/parallax.min.js");
    this.loadScript("./wp-content/themes/ilymun-wp-theme/js/landing/kinetic-v5.1.0.min.js");
    this.loadScript("./wp-content/themes/ilymun-wp-theme/js/landing/functions.js");
  }

  componentWillUnmount() {
    for (let script of this.loadedScripts) {
      document.body.removeChild(script);
    }

    this.loadedScripts = [];
  }

  render () {
    const home = 
      <div id="home">
        <Navbar landing/>
        
        <div id="content" class="site-content">
          <LandingSlider />
          <LandingAbout />
          <LandingParallax />
          <LandingValues />
          <LandingTeam />
          <CountDownParallax />
          <LandingQuotes />
          <LandingPress />
          <LandingPartners />
          <Contact />
          {/* <section id="map" style={{width: '100%', height: '500px'}}></section> */}
          <Map />
        </div>
        <Footer />
        {/* <ScriptTag type="text/javascript" src={require("./wp-content/themes/ilymun-wp-theme/js/owl.carousel.min.js")} /> */}
        {/* <ScriptTag type="text/javascript" src={require("./wp-content/themes/ilymun-wp-theme/js/parallax.min.js")} /> */}
        {/* <ScriptTag type="text/javascript" src={require("./wp-content/themes/ilymun-wp-theme/js/landing/kinetic-v5.1.0.min.js")} /> */}
        {/* <ScriptTag type="text/javascript" src={require("./wp-content/themes/ilymun-wp-theme/js/landing/functions.js")} /> */}
      </div>

    return home;
  }
}