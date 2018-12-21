import React, {Component} from 'react';

export class LandingParallax extends Component {
  render() {
    const parallax = 
      <section class="parallax">
        <div class="parallax-window dotted-overlay" data-parallax="scroll" data-image-src={require("./wp-content/themes/ilymun-wp-theme/images/parallax/01.jpg")}>
          <div class="container">
            <div class="content">
              <h3>By Students for Students</h3>
              <div class="quote">
                <br/><p>We believe that to truly appeal to students’ minds and hearts, the ideas, planning, and execution of the conference must sprout from students.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    return parallax;
  }
}