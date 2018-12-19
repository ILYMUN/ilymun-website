import React, {Component} from 'react';
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

// import './lib/revolution/css/settings.css';
// import './lib/revolution/css/layers.css';
// import './lib/revolution/css/navigation.css';

// import './lib/jquery.themepunch.tools.min.js';
// import './lib/revolution/jquery.themepunch.revolution.min.js';

export class Home extends Component {
  render () {
    const home = 
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

        <section id="map" style={{width: '100%', height: '500px'}}></section>

      </div>

    return home;
  }
}