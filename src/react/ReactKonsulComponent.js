import ReactMultiChild from 'react/lib/ReactMultiChild';
import ReactKonsulIDOperations from './ReactKonsulIDOperations';
import { makeElement, applyProps } from './utils/konsul';

let globalCounter = 1;

const ReactKonsulComponent = function (element) {
  this._rootNodeID = null;
  this._domID = null;
  this._mountImage = null;
  this._mountIndex = 0;
  this._currentElement = element;
  this._node = null;
  this._hostContainerInfo = null;
  this._hostParent = null;
  this._renderedChildren = null;
};

const ReactKonsulComponentMixin = {
  mountComponent (transaction, parent, containerInfo, context) {
    this._rootNodeID = globalCounter++;
    this._domID = containerInfo._idCounter++;
    this._hostParent = parent;
    this._hostContainerInfo = containerInfo;

    const node = this.mountNode(parent, this._currentElement);
    node.setOrder(this._domID);
    this._node = node;

    const children = this._currentElement.props.children;
    this.mountChildren(children, transaction, context);
    this.updateChildrenIndex(children);

    return node;
  },

  updateChildrenIndex (children) {

  },

  mountNode (parent, node) {
    const konsul = ReactKonsulIDOperations.konsul;
    const element = makeElement(node, konsul);

    applyProps(element, node);
    const parentElement = ReactKonsulIDOperations.getParent(parent);

    element.parent = parentElement;
    parentElement.append(element);

    ReactKonsulIDOperations.add(this._rootNodeID, element);

    return element;
  },

  receiveComponent (nextElement, transaction, context) {
    const konsul = ReactKonsulIDOperations.konsul;
    const prevElement = this._currentElement;
    this._currentElement = nextElement;

    const node = this.getPublicInstance();

    const children = nextElement.props.children;
    const childrenToUse = children === null ? [] : [].concat(children);

    applyProps(node, nextElement, prevElement);

    this.updateChildren(childrenToUse, transaction, context);

    konsul.debounceRender();
  },

  getPublicInstance () {
    return this._node;
  },

  getHostNode () {
    return this._currentElement;
  },

  unmountComponent () {
    this.getPublicInstance().destroy();
  }
};

Object.assign(
  ReactKonsulComponent.prototype,
  ReactKonsulComponentMixin,
  ReactMultiChild.Mixin
);

export default ReactKonsulComponent;
