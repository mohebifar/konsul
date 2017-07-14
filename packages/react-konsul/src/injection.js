import ReactInjection from 'react/lib/ReactInjection';
import ReactDefaultBatchingStrategy from 'react/lib/ReactDefaultBatchingStrategy';
import ReactComponentEnvironment from 'react/lib/ReactComponentEnvironment';
import TinyRendererReconcileTransaction from './reconcileTransaction';
import ReactKonsulComponent from './ReactKonsulComponent';
import ReactKonsulTextComponent from './ReactKonsulTextComponent';

export function inject () {
  (ReactInjection.NativeComponent || ReactInjection.HostComponent).injectGenericComponentClass(
    ReactKonsulComponent
  );
  (ReactInjection.NativeComponent || ReactInjection.HostComponent).injectTextComponentClass(
    ReactKonsulTextComponent
  );

  ReactInjection.Updates.injectReconcileTransaction(
    TinyRendererReconcileTransaction
  );

  ReactInjection.Updates.injectBatchingStrategy(
    ReactDefaultBatchingStrategy
  );

  ReactComponentEnvironment.processChildrenUpdates = function (element, data) {
    const update = data[0];

    if (update && update.type === 'INSERT_MARKUP') {
      update.content.setOrder(update.toIndex, true);
    }
  };
  ReactComponentEnvironment.replaceNodeWithMarkupByID = function () {
  };
  ReactComponentEnvironment.replaceNodeWithMarkup = function () {
  };
}
