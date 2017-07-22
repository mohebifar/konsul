import debounce from '../shared/debounce';

export class ReactKonsulIDOperations {
  nodes: {[key:string]: Object} = {};

  setKonsul (konsul): void {
    this.konsul = konsul;

    konsul.removeAllListeners('shouldRender');

    const debouncer = debounce(() => konsul.render(), 0);
    konsul.debounceRender = () => debouncer();
  }

  getParent (parent: any): Object {
    if (typeof parent === 'string') {
      return this.konsul;
    } else {
      return parent._node;
    }
  }

  get (id: string) {
    return this.nodes[id];
  }

  add (id: number|string, node: Object): void {
    this.nodes[id] = node;
  }

  drop (id: number|string) {
    delete this.nodes[id];
  }
}

export default new ReactKonsulIDOperations();
