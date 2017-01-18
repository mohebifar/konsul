import React, { Component } from 'react';
import Highlight from '../components/Highlight';

const code = `class SkinnedMesh {
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

export default class Code extends Component {
  render () {
    return (
      <container>
        <Highlight code={code} style={{fontSize: '1.2em', lineHeight: '1.5'}}/>
      </container>
    );
  }
}
