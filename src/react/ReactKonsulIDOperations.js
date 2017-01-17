import Konsul from '../Konsul';
import Node from '../widgets/Node';
import debounce from './utils/debounce';

export class ReactKonsulIDOperations {
  konsul: Konsul;
  nodes: {[key:string]: Node} = {};

  setKonsul (konsul: Konsul): void {
    this.konsul = konsul;

    konsul.removeAllListeners('shouldRender');

    const debouncer = debounce(() => konsul.render(), 0);
    konsul.debounceRender = () => debouncer();
  }

  getParent (parent: any): (Node|Konsul) {
    if (typeof parent === 'string') {
      return this.konsul;
    } else {
      return parent._node;
    }
  }

  get (id: string) {
    return this.nodes[id];
  }

  add (id: number|string, node: Node): void {
    this.nodes[id] = node;
  }

  drop (id: number|string) {
    delete this.nodes[id];
  }
}

export default new ReactKonsulIDOperations();
