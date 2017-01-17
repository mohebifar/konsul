import Node from './Node';
import { registerClickable, createInteractiveObject } from '../utils/interaction';

export default class Button extends Node {
  label: string = 'Button';

  append (child: Node): void {
    this.children.push(child);
  }

  setChildren (children: Node[]): void {
    this.children = children;
  }

  setLabel (label: string) {
    this.label = label;
  }

  render (): void {
    const logObject = this.getLog();
    console.log(logObject);
    registerClickable(logObject);
  }

  getLog () {
    return createInteractiveObject(this);
  }
}
