import Node from './Node';
import { makeString } from '../utils/styles';

import type { TextStyle } from '../types/styles';
type TextChild = string | number | Text;
type LogData = {
  strings: (string|number)[],
  styles: (?TextStyle)[]
};

export default class Text extends Node {
  children: TextChild[];
  style: TextStyle = null;
  type: string = 'log';

  append (child: TextChild): void {
    this.children.push(child);
    this.konsul.emit('shouldRender');
  }

  setChildren (children: TextChild[]): void {
    this.children = children;
    this.konsul.emit('shouldRender');
  }

  setStyle (style: TextStyle): void {
    this.style = style;
    this.konsul.emit('shouldRender');
  }

  setType (type: string): void {
    this.type = type;
    this.konsul.emit('shouldRender');
  }

  getLogData (): LogData {
    let strings: (string|number)[] = [];
    let styles: TextStyle[] = [];

    this.getChildrenInOrder().forEach(child => {
      if (child instanceof Text) {
        const childLogData = child.getLogData();

        strings = [...strings, ...childLogData.strings];
        styles = [...styles,
          ...childLogData.styles.map(style => {
            if (style === null) {
              return this.style;
            } else if (this.style === null) {
              return style;
            } else {
              return {
                ...this.style,
                ...style
              };
            }
          })
        ];
      } else {
        strings = [...strings, child];
        styles = [...styles, this.style];
      }
    });

    return { strings, styles };
  }

  render (): void {
    const logData: LogData = this.getLogData();
    const string: string = logData.strings.map(string => `%c${string}`).join('');
    console[this.type](string, ...logData.styles.map(makeString));
  }
}
