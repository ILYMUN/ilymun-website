import React, {Component} from 'react';
import './PlainPage.css';

import {Navbar} from './Navbar.jsx';
import {Footer} from './Footer.jsx';

export class PlainPage extends Component {
  render() {
    const plainPage =
      <div class="plainPage">
        <Navbar/>

        <div class="container" style={{marginBottom: '100px'}}>
          <h1 class="title">Title</h1>
          Content
        </div>

        <Footer />
      </div>

    return plainPage;
  }
}