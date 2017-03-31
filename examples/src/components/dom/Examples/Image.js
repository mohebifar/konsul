import React from 'react';
import Highlight from '../Highlight';

const codeString = `import logo from './logo.png';

const Image = () => (
  <container>
    <text>This is an example image:</text>
    <image style={{width: 100, height: 100}} source={logo}/>
  </container>
);`;

const Image = () => (
  <div>
    <h2>Image</h2>
    <Highlight>{codeString}</Highlight>
  </div>
);

export default Image;