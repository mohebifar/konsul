import React, { Component } from 'react';
import logo from '../../images/logo.png';

export default class Image extends Component {
  render () {
    return (
      <container>
        <text>This is an example image:</text>
        <image style={{width: 100, height: 100}} source={window.location.origin + logo}/>
      </container>
    );
  }
}
