import Node from '../widgets/Node';

const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
const registeredClickables = [];
const fixName = name => name.replace(/^[^a-zA-Z_$]|[^0-9a-zA-Z_$]/g, '_');
const createFunction = name => (new Function(`return function ${fixName(name)}(){}`))(); // eslint-disable-line

export function registerClickable (element: Object): void {
  registeredClickables.push(element);
}

export function unregisterClickable (element: Object): void {
  registeredClickables.splice(registeredClickables.indexOf(element), 1);
}

export function createInteractiveObject (element: Node): Object {
  const object = new (createFunction(element.label))();
  Object.defineProperty(object, 'element', {
    enumerable: false,
    configurable: false,
    get: () => element
  });

  return object;
}

Object.getOwnPropertyDescriptor = function (...args) {
  const object = args[0];
  const index = registeredClickables.indexOf(object);

  if (index !== -1) {
    registeredClickables[index].element.emit('click');
    unregisterClickable(object);
    return;
  }

  return getOwnPropertyDescriptor(...args);
};
