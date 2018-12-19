import React, {Component} from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0,
  itemSelector: '.masonryImage',
  columnWidth: '.masonryImage',
  percentPosition: true
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

export class LandingPress extends Component {

  render() {
    const childElements = [
      "./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/0.jpg",
      "./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/1.jpg",
      "./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/2.jpg",
      "./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/3.jpg",
      "./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/4.jpg",
      "./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/5.jpg",
      "./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/6.jpg",
      "./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/7.jpg",
      "./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/8.jpg",
      "./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/9.jpg",
      "./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/10.jpg",
      "./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/11.jpg",
      "./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/12.jpg",
      "./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/13.jpg",
      "./wp-content/themes/ilymun-wp-theme/images/gallery/sample/optimized/14.jpg",
    ].map(function(src){
      return (
        <div className="masonryImage col-md-3 col-sm-4 col-xs-6">
          <img src={src} />
        </div>
       );
      });

    const press =
    <section id="press">
      <div>
        <div class="gray-bg angular section-padding">
          <div class="top-angle"></div>
            <div class="container">
                <div class="section-head"> {/* TODO: Add back: appear slide-right*/}
                  <h2 class="section-title">Press</h2>
                  <p class="section-description">
                      A peak at what ILYMUN is all about. Read from hundreds of articles and take a look at our photo gallery to learn more about what is going on with ILYMUN.
                  </p>
                </div>
                <div class="col-md-12" style={{textAlign: 'center', marginTop: '-100px', marginBottom: '30px'}}>
                  <h3>Latest Articles</h3>
                  <a href='https://medium.com/ilymun'>
                  <button class="button">Checkout Our Articles</button>
                  </a>
                </div>
                <div class="col-md-12" style={{textAlign: 'center', marginBottom: '75px'}}>
                  <h3>Photos</h3>

                  <Masonry
                    className={'masonry row'} // default ''
                    elementType={'div'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    imagesLoadedOptions={imagesLoadedOptions} // default {}
                  >
                    {childElements}
                  </Masonry>
                  <br />
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