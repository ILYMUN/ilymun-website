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

import {Navbar} from './Navbar.jsx';
import {Footer} from './Footer.jsx';

export class Home extends Component {
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
          <section id="map" style={{width: '100%', height: '500px'}}></section>
        </div>
        <Footer />
      </div>

    return home;
  }
}