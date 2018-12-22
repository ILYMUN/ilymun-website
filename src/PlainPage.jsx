import React, {Component} from 'react';
import './PlainPage.css';

import {Navbar} from './Navbar.jsx';
import {Footer} from './Footer.jsx';

export class PlainPage extends Component {
  componentDidMount() {
    // Makes sure that when a plainPage is mounted for the first time through 
    // a router it scrolls to the top.
    window.scrollTo(0, 0);
  }

  render() {
    const title = this.props.title == undefined ? "" : <h1 class="title">{this.props.title}</h1>

    const plainPage =
      <div class="plainPage">
        <Navbar/>

        <div id="content" class="container" style={{marginBottom: '100px'}}>
          {title}
          {this.props.children}
        </div>

        <Footer />
      </div>

    return plainPage;
  }
}