import React, {Component} from 'react';

export class CountDownParallax extends Component {
  render() {
    const countdown =
      <section class="parallax count-down">
        <div class="parallax-window dotted-overlay" data-parallax="scroll" data-image-src="./wp-content/themes/ilymun-wp-theme/images/parallax/count-down.jpg">
          <div class="container" style={{marginTop: '100px'}}>
            <div class="content">
              <h3>Time Until Next Event</h3>
              <div class="countdown countdown-container container"
              data-end="1548338400"
              data-now={new Date().getTime().toString()}
              data-border-color="rgba(255, 255, 255, .8)">
                <div class="clock row">
                  <div class="clock-item clock-days countdown-time-value col-sm-3 col-md-3">
                    <div class="wrap">
                      <div class="inner">
                        <div id="canvas-days" class="clock-canvas"></div>
                        <div class="text">
                          <p class="val">0</p>
                          <p class="type-days type-time">DAYS</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="clock-item clock-hours countdown-time-value col-sm-3 col-md-3">
                    <div class="wrap">
                      <div class="inner">
                        <div id="canvas-hours" class="clock-canvas"></div>
                        <div class="text">
                          <p class="val">0</p>
                          <p class="type-hours type-time">HOURS</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="clock-item clock-minutes countdown-time-value col-sm-3 col-md-3">
                    <div class="wrap">
                      <div class="inner">
                        <div id="canvas-minutes" class="clock-canvas"></div>
                        <div class="text">
                          <p class="val">0</p>
                          <p class="type-minutes type-time">MINUTES</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="clock-item clock-seconds countdown-time-value col-sm-3 col-md-3">
                    <div class="wrap">
                      <div class="inner">
                        <div id="canvas-seconds" class="clock-canvas"></div>
                        <div class="text">
                          <p class="val">0</p>
                          <p class="type-seconds type-time">SECONDS</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    return countdown;
  }
}