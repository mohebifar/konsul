import Node from './Node';

export default class Container extends Node {
  children: Node[];

  append (child: Node): void {
    this.children.push(child);
    this.konsul.emit('shouldRender');
  }

  setChildren (children: Node[]): void {
    this.children = children;
    this.konsul.emit('shouldRender');
  }

  render (): void {
    this.getChildrenInOrder().forEach(element => {
      element.render();
    });
  }
}
