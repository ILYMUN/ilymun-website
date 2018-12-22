import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Navbar } from './Navbar';

import './NotFound.css';

export class NotFound extends Component {
  render() {
    const notFound =
      <div class="not-found">
        <Navbar/>
        <div id='oopss'>
          <div id='error-text'>
          <span>404</span>
          <p>Oops...<br />
          PAGE NOT FOUND</p>
          <p class='hmpg'><Link to="/"><a class="back">Back To Homepage</a></Link></p>
          <p></p>
          </div>
        </div>
      </div>

    return notFound;
  }
}