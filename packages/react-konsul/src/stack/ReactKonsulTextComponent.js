import ReactKonsulIDOperations from './ReactKonsulIDOperations';

const ReactKonsulTextComponent = function (text) {
  this._currentElement = text;
  this._stringText = '' + text;
  this._parent = null;
  this._domID = null;
  this._node = null;
};

const ReactKonsulComponentMixin = {
  mountComponent (transaction, nativeParent, containerInfo, context) {
    this._parent = nativeParent;
    this._node = this.mountNode(nativeParent);
    this._domID = containerInfo._idCounter++;
    this._node.setOrder(this._domID);

    return this.node;
  },

  mountNode (parent) {
    const konsul = ReactKonsulIDOperations.konsul;
    const element = konsul.text();
    element.setChildren([this._stringText]);
    element.parent = parent._node;

    parent._node.append(element);

    return element;
  },

  receiveComponent (nextText, transaction, context) {
    const konsul = ReactKonsulIDOperations.konsul;

    this._stringText = nextText;
    this._node.setChildren([nextText]);
    konsul.debounceRender();
  },

  getHostNode () {
    return this._node;
  },

  unmountComponent () {
    this._node.destroy();
  }
};

Object.assign(
  ReactKonsulTextComponent.prototype,
  ReactKonsulComponentMixin
);

export default ReactKonsulTextComponent;
