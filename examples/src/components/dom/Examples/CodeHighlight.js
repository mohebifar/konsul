import React from 'react';
import Highlight from '../Highlight';

const codeString = `const code = \`class SkinnedMesh {
  constructor(geometry, materials) {
    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  update(camera) {
    //...
    super.update();
  }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}\`;

const CodeHighlight = () => (
  <container>
    <Highlight code={code} style={{fontSize: '1.2em', lineHeight: '1.5'}}/>
  </container>
);
`;

const CodeHighlight = () => (
  <div>
    <h2>Code Highlighter</h2>
    For the syntax highlighter, I used <a href="https://github.com/wooorm/lowlight" target="_blank">lowlight</a>
    {' and made '}
    <a href="https://github.com/mohebifar/konsul/blob/ec417480d70c1fce5a4ad60d845d683f3d7103e4/examples/src/konsul/components/lowlight.js">my own mapper</a>
    <Highlight>{codeString}</Highlight>
  </div>
);

export default CodeHighlight;