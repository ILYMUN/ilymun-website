import React, {Component} from 'react';

export class LandingPress extends Component {
  render() {
    const press =
    <section id="press">
      <div>
        <div class="gray-bg angular section-padding">
          <div class="top-angle"></div>
            <div class="container">
                <div class="section-head appear slide-right">
                  <h2 class="section-title">Press</h2>
                  <p class="section-description">
                      A peak at what ILYMUN is all about. Read from hundreds of articles and take a look at our photo gallery to learn more about what is going on with ILYMUN.
                  </p>
                </div>
                <div class="col-md-12" style={{textAlign: 'center', marginTop: '-100px', marginBottom: '30px'}}>
                  <h3>Latest Articles</h3>
                  <button class="button" onclick="location.href='/articles/';">Checkout Our Articles</button>
                </div>
                <div class="col-md-12" style={{textAlign: 'center', marginBottom: '75px'}}>
                  <h3>Photos</h3>

                  <div class="masonry row" style={{marginBottom: '15px'}}>
                    <div class="masonryImage col-md-3 col-sm-4 col-xs-6" style={{padding: '0 !important', margin: '0 !important'}}>
                      <img src="./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/0.jpg" alt="" class="img-responsive" />
                    </div>
                    <div class="masonryImage col-md-3 col-sm-4 col-xs-6" style={{padding: '0 !important', margin: '0 !important'}}>
                      <img src="./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/1.jpg" alt="" class="img-responsive" />
                    </div>
                    <div class="masonryImage col-md-3 col-sm-4 col-xs-6" style={{padding: '0 !important', margin: '0 !important'}}>
                      <img src="./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/2.jpg" alt="" class="img-responsive" />
                    </div>
                    <div class="masonryImage col-md-3 col-sm-4 col-xs-6" style={{padding: '0 !important', margin: '0 !important'}}>
                      <img src="./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/3.jpg" alt="" class="img-responsive" />
                    </div>
                    <div class="masonryImage col-md-3 col-sm-4 col-xs-6" style={{padding: '0 !important', margin: '0 !important'}}>
                      <img src="./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/4.jpg" alt="" class="img-responsive" />
                    </div>
                    <div class="masonryImage col-md-3 col-sm-4 col-xs-6" style={{padding: '0 !important', margin: '0 !important'}}>
                      <img src="./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/5.jpg" alt="" class="img-responsive" />
                    </div>
                    <div class="masonryImage col-md-3 col-sm-4 col-xs-6" style={{padding: '0 !important', margin: '0 !important'}}>
                      <img src="./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/6.jpg" alt="" class="img-responsive" />
                    </div>
                    <div class="masonryImage col-md-3 col-sm-4 col-xs-6" style={{padding: '0 !important', margin: '0 !important'}}>
                      <img src="./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/7.jpg" alt="" class="img-responsive" />
                    </div>
                    <div class="masonryImage col-md-3 col-sm-4 col-xs-6" style={{padding: '0 !important', margin: '0 !important'}}>
                      <img src="./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/8.jpg" alt="" class="img-responsive" />
                    </div>
                    <div class="masonryImage col-md-3 col-sm-4 col-xs-6" style={{padding: '0 !important', margin: '0 !important'}}>
                      <img src="./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/9.jpg" alt="" class="img-responsive" />
                    </div>
                    <div class="masonryImage col-md-3 col-sm-4 col-xs-6" style={{padding: '0 !important', margin: '0 !important'}}>
                      <img src="./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/10.jpg" alt="" class="img-responsive" />
                    </div>
                    <div class="masonryImage col-md-3 col-sm-4 col-xs-6" style={{padding: '0 !important', margin: '0 !important'}}>
                      <img src="./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/11.jpg" alt="" class="img-responsive" />
                    </div>
                    <div class="masonryImage col-md-3 col-sm-4 col-xs-6" style={{padding: '0 !important', margin: '0 !important'}}>
                      <img src="./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/12.jpg" alt="" class="img-responsive" />
                    </div>
                    <div class="masonryImage col-md-3 col-sm-4 col-xs-6" style={{padding: '0 !important', margin: '0 !important'}}>
                      <img src="./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/13.jpg" alt="" class="img-responsive" />
                    </div>
                    <div class="masonryImage col-md-3 col-sm-4 col-xs-6" style={{padding: '0 !important', margin: '0 !important'}}>
                      <img src="./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/14.jpg" alt="" class="img-responsive" />
                    </div>
                  </div>

                  <button class="button" onclick="location.href='/media/';">Checkout more Photogrpahy</button>
                </div>
            </div>
            <div class="bottom-angle"></div>
          </div>
        </div>
      </section>

    return press;
  }
}