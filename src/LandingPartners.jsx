import React, {Component} from 'react';

export class LandingPartners extends Component {
  render() {
    const partners = 
      <section id="partners">
        <div>
          <div class="blue-bg angular section-padding">
            <div class="top-angle"></div>
            <div class="container">
              <div style={{marginTop: '-50px'}}>
                <h2 class="plain-lg-title text-center" style={{color: 'white'}}><span>Our Partners</span></h2><br />
                <div class="row">
                  <p class="col-md-8 col-md-push-2 text-center" style={{color: 'white'}}>
                      A big thank you to all our partners who have been supporting International Lyon Model United Nations over the year. They make this event possible.
                  </p>
                </div><br />
              </div>
              <div class="section-content" style={{marginBottom: '100px'}}>
                <div id="partners-slider">
                  <div><a href='https://www.boehringer-ingelheim.com/'><img class="lazy" data-original="./wp-content/themes/ilymun-wp-theme/images/partners/1.png" /></a></div>
                  <div><a href='http://www.media6.com/en/'><img class="lazy" data-original="./wp-content/themes/ilymun-wp-theme/images/partners/2.png" /></a></div>
                  <div><a href=' http://www.risofrance.fr/accueil.html'><img class="lazy" data-original="./wp-content/themes/ilymun-wp-theme/images/partners/3.png" /></a></div>
                  <div><img class="lazy" data-original="./wp-content/themes/ilymun-wp-theme/images/partners/4.png" /></div>
                  <div><a href='http://www.intonations.com/'><img class="lazy" data-original="./wp-content/themes/ilymun-wp-theme/images/partners/5.png" /></a></div>
                  <div><a href='http://www.mri-relocation.com/'><img class="lazy" data-original="./wp-content/themes/ilymun-wp-theme/images/partners/6.png" /></a></div>
                  <div><a href='https://csianglo.org/'><img class="lazy" data-original="./wp-content/themes/ilymun-wp-theme/images/partners/7.png" /></a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-angle"></div>
        </div>
      </section>
    
    return partners;
  }
}