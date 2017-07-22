/* @flow */

const ReactFiberReconciler = require('react-dom/lib/ReactFiberReconciler');
import { makeElement, applyProps } from '../shared/konsul';
import debounce from '../shared/debounce';

const emptyObject = {};

const KonsulReconciler = ReactFiberReconciler({
  createInstance(
    type,
    allProps,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    const { children, ...props } = allProps;
    const instance = makeElement({ type }, rootContainerInstance);
    applyProps(instance, { type, props });

    return instance;
  },

  appendInitialChild(
    parentInstance,
    child
  ) {
    parentInstance.append(child);
    child.parent = parentInstance;
    child.setOrder(parentInstance.children.length)
  },

  appendChild(
    parentInstance,
    child
  ) {
    parentInstance.append(child);
    child.parent = parentInstance;
    child.setOrder(parentInstance.children.length)
  },

  removeChild(
    parentInstance,
    child
  ): void {
    child.destroy();
  },

  insertBefore(
    parentInstance,
    child,
    beforeChild
  ): void {
    // TODO: Not working properly yet
    parentInstance.append(child);
    child.parent = parentInstance;
    console.log(beforeChild.order)
    
    if (beforeChild) {
      child.setOrder(beforeChild.order);
    }
  },

  finalizeInitialChildren(
    instance,
    type,
    allProps,
    rootContainerInstance
  ): boolean {
    const { children, ...props } = allProps;
    applyProps(instance, { type, props });
    return false;
  },

  prepareUpdate(
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    hostContext
  ) {
    return newProps;
  },

  commitUpdate(
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    internalInstanceHandle
  ): void {
    applyProps(instance, { type, props: newProps });
    instance.konsul.debounceRender();
  },

  commitMount(
    instance,
    type,
    newProps,
    internalInstanceHandle
  ) {
    instance.konsul.debounceRender();
  },

  getRootHostContext(rootContainerInstance) {
    return emptyObject;
  },
  
  getChildHostContext(parentHostContext, type){
    return emptyObject;
  },

  getPublicInstance(instance) {
    return instance;
  },

  shouldSetTextContent(props): boolean {
    return false;
  },

  resetTextContent(instance): void {
    instance.setContent('');
  },

  createTextInstance(
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    const instance = rootContainerInstance.text();
    instance.setChildren([text]);
    return instance;
  },

  commitTextUpdate(
    textInstance,
    oldText,
    newText
  ): void {
    textInstance.setChildren([newText]);
  },

  prepareForCommit() {
    // noop
  },
  resetAfterCommit() {
    // noop
  },
  scheduleAnimationCallback() {
    throw new Error('Unimplemented');
  },
  scheduleDeferredCallback(a) {
    throw new Error('Unimplemented');
  },
  useSyncScheduling: true,
});

module.exports = (element, konsul, callback) => {
  let root = roots.get(konsul);
  if (!root) {
    root = KonsulReconciler.createContainer(konsul);
    roots.set(konsul, root);
  }

  konsul.removeAllListeners('shouldRender');

  const debouncer = debounce(() => konsul.render(), 16);
  konsul.debounceRender = () => debouncer();
  KonsulReconciler.updateContainer(element, root, null, callback);
  konsul.debounceRender();
  
  return KonsulReconciler.getPublicRootInstance(root);
};

const roots = new Map();
