import Node from './widgets/Node';

export default class Konsul {
  nodes: Node[] = [];

  append(node: Node): void {
    this.nodes.push(node);
  }

  render(clear: boolean = false): void {
    if (clear) {
      this.clear();
    }

    this.nodes.forEach(node => node.render());
  }

  clear(): void {
    console.clear();
  }
}