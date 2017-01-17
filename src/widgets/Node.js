// @flow
import EventEmitter from 'eventemitter3';
import Konsul from './../Konsul';

export default class Node extends EventEmitter {
  children: Node[] = [];
  order: number = 0;
  destroyed: boolean = false;

  constructor (konsul: ?Konsul, parent: ?Node = null): void {
    super();

    this.konsul = konsul || this;
    this.parent = parent;
  }

  append (node: Node): void {
    this.children.push(node);
  }

  remove (element: Node): void {
    if (element.parent !== this) {
      return;
    }

    const index = this.children.indexOf(element);

    if (index === -1) {
      return;
    }

    element.parent = null;
    this.children.splice(index, 1);
  }

  detach (): void {
    if (this.parent) {
      this.parent.remove(this);
    }
  }

  destroy (): void {
    this.detach();

    this.forDescendants(
      (element: any) => {
        if (element instanceof Node) {
          element.destroyed = true;
          element.emit('destroy');
        }
      },
      true
    );
  }

  setOrder (order: number, updateSiblings: boolean = false): void {
    if (updateSiblings) {
      const siblings = this.getSiblingsInOrder();

      for (let i = 0, length = siblings.length; i < length; i++) {
        siblings[i].order = i >= order ? i + 1 : i;
      }
    }

    this.order = order;
  }

  getChildrenInOrder (): any[] {
    return this.children.sort((element1, element2) => element1.order > element2.order ? 1 : -1);
  }

  getSiblingsInOrder (): any[] {
    return this.parent ? this.parent.getChildrenInOrder().filter(node => node !== this) : [];
  }

  forDescendants = function (iteration: Function, includeMe: boolean = false) {
    if (includeMe) {
      iteration(this);
    }

    const emit = (element: any) => {
      iteration(element);

      if (element instanceof Node) {
        element.children.forEach(emit);
      }
    };

    this.children.forEach(emit);
  };
}
