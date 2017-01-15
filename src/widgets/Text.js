import Node from './Node';
import { makeString } from '../utils/styles';

import type { TextStyle } from '../types/styles';
type TextChild = string | Text;
type LogData = {
  strings: string[],
  styles: (?TextStyle)[]
};

export default class Text extends Node {
  style: TextStyle = null;

  append(child: TextChild): void {
    this.children.push(child);
  }

  setChildren(children: TextChild[]): void {
    this.children = children;
  }

  setStyle(style: TextStyle): void {
    this.style = style;
  }

  getLogData(): LogData {
    let strings: string[] = [];
    let styles: TextStyle = [];

    this.children.forEach(child => {
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

  render(): void {
    const logData: LogData = this.getLogData();
    const string: string = logData.strings.map(string => `%c${string}`).join('');
    console.log(string, ...logData.styles.map(makeString));
  }
}