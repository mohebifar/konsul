import React from 'react';
import Highlight from './Highlight';

const code = `import Highlight from './Highlight';

class SkinnedMesh {
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
}`;

const CodeHighlight = () => (
  <container>
    <Highlight code={code} style={{fontSize: '1.2em', lineHeight: '1.5'}}/>
  </container>
);

export default CodeHighlight;
