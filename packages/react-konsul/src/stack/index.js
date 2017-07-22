import { isValidElement } from './utils/invariants';
import { inject } from './injection';
import instantiateReactComponent from 'react/lib/instantiateReactComponent';
import ReactInstanceHandles from 'react/lib/ReactInstanceHandles';
import ReactUpdates from 'react/lib/ReactUpdates';
import ReactKonsulIDOperations from './ReactKonsulIDOperations';

inject();

const render = (nextElement, konsul, callback) => {
  isValidElement(nextElement);

  ReactKonsulIDOperations.setKonsul(konsul);

  const rootId = ReactInstanceHandles.createReactRootID(0);
  ReactKonsulIDOperations.add(rootId, konsul);
  const component = instantiateReactComponent(nextElement);

  ReactUpdates.batchedUpdates(() => {
    const transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
    transaction.perform(() => {
      component.mountComponent(
        transaction,
        rootId,
        { _idCounter: 0 },
        {}
      );
    });
    ReactUpdates.ReactReconcileTransaction.release(transaction);
  });

  konsul.render();
};

module.exports = render;
