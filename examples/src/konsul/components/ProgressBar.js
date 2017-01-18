import React, { Component } from 'react';

export default class Progress extends Component {
  props: {
    width?: number,
    progress: number,
    style?: Object,
    blank?: string,
    filled?: string
  };

  static defaultProps = {
    width: 20,
    blank: '▁',
    filled: '▇',
    style: {}
  };

  render () {
    const { blank, filled, progress, width } = this.props;
    const numberOfFilled = Math.floor(progress * width);
    const progressBar = Array
      .from({ length: width })
      .map((value, key) => key >= numberOfFilled ? blank : filled)
      .join('');

    return (
      <text style={{fontFamily: 'monospace', ...this.props.style}}>
        {progressBar}
      </text>
    );
  }
}