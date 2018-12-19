import React, {Component} from 'react';
import LazyLoad from 'react-lazyload';

export class LandingTeam extends Component {
  render () {
    const team = 
      <section id="team">
        <div>
          <div class="gray-bg angular section-padding">
            <div class="top-angle"></div>
            <div class="container">
              <div class="section-head"> {/*TODO: Add back: appear slide-right*/}
                <h2 class="section-title">Our Team</h2>
                <p class="section-description">
                  Meet the people who make all this possible. A hard working team dedicated to bringing ILYMUN to life in the best way possible.
                </p>
              </div>
              <div class="section-content">
                <div class="row">
                  <div class="col-md-4 col-sm-4">
                    <LazyLoad>
                      <img src={require("./images/team/estee.jpg")} />
                    </LazyLoad>
                    <p>Estée Poichot</p>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <LazyLoad>
                      <img src={require("./images/team/justine.jpg")} />
                    </LazyLoad>
                    <p>Justine Seguin</p>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <LazyLoad>
                      <img src={require("./images/team/david.jpg")} />
                    </LazyLoad>
                    <p>David Genaro Garcia</p>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <LazyLoad>
                      <img src={require("./images/team/remi.jpg")} />
                    </LazyLoad>
                    <p>Rémi Fodor</p>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <LazyLoad>
                      <img src={require("./images/team/line.jpg")} />
                    </LazyLoad>
                    <p>Line Teixeira</p>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <LazyLoad height={200}>
                      <img src={require("./images/team/matthieu.jpg")} />
                    </LazyLoad>
                    <p>Matthieu Contamin</p>
                  </div>
                </div>
                <div class="row">
                  <form action="/team/">
                    <button type="submit" class="button" style={{display: 'block', margin: '0 auto'}}>See the Entire Team</button>
                  </form>
                </div>
              </div>
            </div>
            <div class="bottom-angle"></div>
          </div>
        </div>
      </section>

    return team;
  }
}