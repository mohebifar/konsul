import Node from './Node';

export default class Group extends Node {
  children: Node[];
  name: string = 'Unnamed group';

  append (child: Node): void {
    this.children.push(child);
    this.konsul.emit('shouldRender');
  }

  setChildren (children: Node[]): void {
    this.children = children;
    this.konsul.emit('shouldRender');
  }

  setName (name: string): void {
    this.name = name;
  }

  render (): void {
    console.group(this.name);
    this
      .getChildrenInOrder()
      .forEach(element => {
        element.render();
      });
    console.groupEnd(this.name);
  }
}
