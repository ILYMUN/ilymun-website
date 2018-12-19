import React, {Component} from 'react';

export class LandingValues extends Component {
  render() {
    const values = 
      <section id="values">
        <div class="white-bg angular section-padding">
          <div class="top-angle"></div>
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12"> {/*TODO: Add back: appear bounce-up*/}
                <h2 class="lg-title text-center"><span>Why ILYMUN?</span></h2>
              </div>
              <div class="col-md-8 col-sm-12 col-xs-12 col-md-offset-2"> {/*TODO: Add back: appear bounce-up*/}
                <p class="lg-text text-center">The same way the laws of physics dictate the course of planets, ILYMUN is first and foremost governed by a set of core values that are deeply embedded in each and every member of the organizing team.</p>
              </div>
            </div>
          </div>
          <div id="feature" class="feature">
            <div class="container">
              <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-12"> {/*TODO: Add back: appear bounce-up*/}
                  <div class="feature-wrap">
                    <div class="icon-wrap"><i class="fa fa-users"></i></div>
                    <h3>Impacting Society</h3>
                    <p>Although we recognize MUN as an indirect means to progress, we also seek to have a direct impact on the world around us.</p>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12"> {/*TODO: Add back: appear bounce-up*/}
                  <div class="feature-wrap">
                    <div class="icon-wrap"><i class="fa fa-globe"></i></div>
                    <h3>Quality Service</h3>
                    <p>Our deepest desire is to educate our delegates into becoming world citizens and global thinkers who will shape tomorrow’s world.</p>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12"> {/*TODO: Add back: appear bounce-up*/}
                  <div class="feature-wrap">
                    <div class="icon-wrap"><i class="fa fa-lightbulb-o"></i></div>
                    <h3>Innovation & Creativity</h3>
                    <p>We constantly seek to learn and grow from previous experiences and actively work to make each conference better than the previous one.</p>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12"> {/*TODO: Add back: appear bounce-up*/}
                  <div class="feature-wrap">
                    <div class="icon-wrap"><i class="fa fa-child"></i></div>
                    <h3>Integrity</h3>
                    <p>We seek to make the ILYMUN experience available to all, regardless of socio-economic situation or distance from Lyon, by keeping fees as low as possible.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    return values;
  }
}