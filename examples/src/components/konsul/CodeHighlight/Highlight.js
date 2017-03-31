import React, { Component } from 'react';
import low from 'lowlight/lib/core';
import { styles, mapWithDepth } from './lowlight';

low.registerLanguage('jsx', require('highlight.js/lib/languages/javascript'));

class Highlight extends Component {
  prop: {
    code: string,
    language?: string,
    style?: Object
  };

  static defaultProps = {
    language: 'jsx',
    style: {}
  };

  render (): void {
    const { code, language, style } = this.props;
    const codeTree = low.highlight(language, code);
    return (
      <text style={{...styles.main, ...style}}>
        {codeTree.value.map(mapWithDepth(0))}
      </text>
    );
  }
}

export default Highlight;
