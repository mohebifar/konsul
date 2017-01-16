import Konsul from './../Konsul';

interface NodeInterface {
  children: Node[];
  konsul: Konsul;
  parent: Node;

  render() : void;
}

export default class Node implements NodeInterface {
  children: Node[] = [];

  constructor(konsul: Konsul, parent: ?Node = null): void {
    this.konsul = konsul;
    this.parent = parent;
  }
}