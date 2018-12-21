import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import $ from "jquery";

import { BrowserRouter } from 'react-router-dom';

import './application.js';

// import "./wp-content/themes/ilymun-wp-theme/js/revolution/jquery.themepunch.tools.min.js";
// import "./wp-content/themes/ilymun-wp-theme/js/revolution/jquery.themepunch.revolution.min.js";

// import "./wp-content/themes/ilymun-wp-theme/js/revolution/extensions/revolution.extension.actions.min.js";
// import "./wp-content/themes/ilymun-wp-theme/js/revolution/extensions/revolution.extension.carousel.min.js";
// import "./wp-content/themes/ilymun-wp-theme/js/revolution/extensions/revolution.extension.kenburn.min.js";
// import "./wp-content/themes/ilymun-wp-theme/js/revolution/extensions/revolution.extension.layeranimation.min.js";
// import "./wp-content/themes/ilymun-wp-theme/js/revolution/extensions/revolution.extension.migration.min.js";
// import "./wp-content/themes/ilymun-wp-theme/js/revolution/extensions/revolution.extension.navigation.min.js";
// import "./wp-content/themes/ilymun-wp-theme/js/revolution/extensions/revolution.extension.parallax.min.js";
// import "./wp-content/themes/ilymun-wp-theme/js/revolution/extensions/revolution.extension.slideanims.min.js";
// import "./wp-content/themes/ilymun-wp-theme/js/revolution/extensions/revolution.extension.video.min.js";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// // LADNING SLIDER SCRIPT
// var tpj = $;
// var revapi20;
// tpj(document).ready(function() {
//     if (tpj("#rev_slider_20_1").revolution == undefined) {
//         revslider_showDoubleJqueryError("#rev_slider_20_1");
//     } else {
//         revapi20 = tpj("#rev_slider_20_1").show().revolution({
//             sliderType: "hero",
//             jsFileLocation: "../../revolution/js/",
//             sliderLayout: "fullwidth",
//             dottedOverlay: "none",
//             delay: 9000,
//             navigation: {},
//             responsiveLevels: [1240, 1024, 778, 480],
//             gridwidth: [1240, 1024, 778, 480],
//             gridheight: [920, 700, 500, 500],
//             lazyType: "none",
//             parallax: {
//                 type: "mouse",
//                 origo: "slidercenter",
//                 speed: 2000,
//                 levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
//             },
//             shadow: 0,
//             spinner: "off",
//             autoHeight: "off",
//             disableProgressBar: "on",
//             hideThumbsOnMobile: "off",
//             hideSliderAtLimit: 0,
//             hideCaptionAtLimit: 0,
//             hideAllCaptionAtLilmit: 0,
//             debugMode: false,
//             fallbacks: {
//                 simplifyAll: "off",
//                 disableFocusListener: false,
//             }
//         });
//     }
// }); /*ready*/