import React from 'react';
import logo from '../../../images/logo.png';

const Image = () => (
  <container>
    <text>This is an example image:</text>
    <image style={{width: 100, height: 100}} source={window.location.origin + logo}/>
  </container>
);

export default Image;
