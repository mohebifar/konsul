import Node from './widgets/Node';
import EventEmitter from 'eventemitter3';
import type { WidgetRegisterContract } from './types/widgets';
import type { KonsulOptions } from './types/konsul';

const defaultOptions: KonsulOptions = {
  clear: true,
  renderWaitTolerance: 50
};

export default class Konsul extends EventEmitter {
  nodes: Node[] = [];
  options: KonsulOptions;
  rendered: boolean = false;
  lastTime: number;

  constructor(options: KonsulOptions = {}): void {
    super();

    this.options = {
      ...defaultOptions,
      ...options
    };

    this.registerListeners();
  }

  append(node: Node): void {
    this.nodes.push(node);
  }

  render(clear: boolean = true): void {
    this.rendered = true;

    if (this.options.clear && clear) {
      this.clear();
    }

    this.nodes.forEach(node => {
      node.render();
    });
  }

  requestRender(): void {
    if (!this.rendered || this.lastTime === 0) {
      return;
    }

    this.lastTime = Date.now();

    setTimeout(() => {
      this.lastTime = 0;
      this.render();
    }, this.options.renderWaitTolerance);
  }

  clear(): void {
    console.clear();
  }

  registerWidget(registration: WidgetRegisterContract): void {
    const { name, widget: Widget } = registration;
    if (typeof this[name] !== 'undefined') {
      throw new Error(`'${name}' widget has already been registered`);
    }

    const mapOptions: Object = registration.options ? registration.options : {};

    this[name] = (options: Object = {}) => {
      const node = new Widget(this);

      Object.keys(options).forEach(key => {
        if (mapOptions[key]) {
          mapOptions[key](options[key], node);
        }
      });

      return node;
    };
  }

  registerListeners(): void {
    this.addListener('shouldRender', () => {
      this.requestRender();
    });
  }
}