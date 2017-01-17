import invariant from 'fbjs/lib/invariant';
import ReactElement from 'react/lib/ReactElement';

export const isValidElement = (nextElement) => invariant(
  ReactElement.isValidElement(nextElement),
  'ReactKonsul.render(): Invalid component element.%s',
  (
    typeof nextElement === 'function'
      ? ' Instead of passing a component class, make sure to instantiate it by passing it to React.createElement.'
      : nextElement != null && nextElement.props !== undefined
      ? ' This may be caused by unintentionally loading two independent copies of React.'
      : ''
  )
);
