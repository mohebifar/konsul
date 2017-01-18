import React, { Component } from 'react';
import low from 'lowlight/lib/core';
import { styles, mapWithDepth } from './lowlight';

low.registerLanguage('js', require('highlight.js/lib/languages/javascript'));

export default class Highlight extends Component {
  prop: {
    code: string,
    language?: string,
    style?: Object
  };

  static defaultProps = {
    language: 'js',
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
