import Node from './widgets/Node';
import type { WidgetRegisterContract } from './types/widgets';
import type { KonsulOptions } from './types/konsul';

const defaultOptions: KonsulOptions = {
  clear: true,
  renderDebounce: 10
};

export default class Konsul extends Node {
  options: KonsulOptions;
  rendered: boolean = false;
  lastTime: number;

  constructor (options: KonsulOptions = {}): void {
    super(null, null);

    this.options = {
      ...defaultOptions,
      ...options
    };

    this.registerListeners();
  }

  render (clear: boolean = true): void {
    this.rendered = true;

    if (this.options.clear && clear) {
      this.clear();
    }

    this.children.forEach(element => {
      element.render();
    });
  }

  requestRender (): void {
    if (!this.rendered || this.lastTime === 0) {
      return;
    }

    this.lastTime = Date.now();

    setTimeout(() => {
      this.lastTime = 0;
      this.render();
    }, this.options.renderDebounce);
  }

  clear (): void {
    console.clear();
  }

  registerWidget (registration: WidgetRegisterContract): void {
    const { name, widget: Widget } = registration;
    if (typeof this[name] !== 'undefined') {
      throw new Error(`'${name}' widget has already been registered`);
    }

    const mapOptions: Object = registration.options ? registration.options : {};

    this[name] = (options: Object = {}) => {
      const element = new Widget(this);

      Object.keys(options).forEach(key => {
        if (mapOptions[key]) {
          mapOptions[key](options[key], element);
        }
      });

      return element;
    };
  }

  registerListeners (): void {
    this.addListener('shouldRender', () => {
      this.requestRender();
    });
  }
}
