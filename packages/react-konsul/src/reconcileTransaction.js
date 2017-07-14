import CallbackQueue from 'react/lib/CallbackQueue';
import PooledClass from 'react/lib/PooledClass';
import Transaction from 'react/lib/Transaction';
import ReactUpdateQueue from 'react/lib/ReactUpdateQueue';

const ON_KONSUL_READY_QUEUEING = {
  initialize: function () {
    this.reactMountReady.reset();
  },
  close: function () {
    this.reactMountReady.notifyAll();
  }
};

function ReactKonsulReconcileTransaction () {
  this.reinitializeTransaction();
  this.reactMountReady = CallbackQueue.getPooled(null);
}

const Mixin = {
  getTransactionWrappers: function () {
    return [ON_KONSUL_READY_QUEUEING];
  },
  getReactMountReady: function () {
    return this.reactMountReady;
  },
  /**
   * @return {object} The queue to collect React async events.
   */
  getUpdateQueue: function () {
    return ReactUpdateQueue;
  },
  destructor: function () {
    CallbackQueue.release(this.reactMountReady);
    this.reactMountReady = null;
  }
};

Object.assign(
  ReactKonsulReconcileTransaction.prototype,
  Transaction.Mixin,
  Mixin
);

PooledClass.addPoolingTo(ReactKonsulReconcileTransaction);

export default ReactKonsulReconcileTransaction;
