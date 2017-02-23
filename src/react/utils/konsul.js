const STATUS_NO_CHANGE = 0;
const STATUS_CREATED = 1;
const STATUS_UPDATED = 2;

export function makeElement (node: Object, konsul) {
  switch (node.type) {
    case 'text':
    case 'image':
    case 'container':
    case 'group':
    case 'button':
      return konsul[node.type](konsul);
    default:
      return null;
  }
}

export function applyProps (element, node: Object, prevNode?: ?Object) {
  const { type, props } = node;

  switch (type) {
    case 'text':
      if (shouldPropUpdate('style', node, prevNode)) {
        element.setStyle(props.style);
      }
      if (shouldPropUpdate('type', node, prevNode)) {
        element.setType(props.type);
      }
      break;
    case 'image':
      if (shouldPropUpdate('style', node, prevNode)) {
        element.setStyle(props.style);
      }

      if (shouldPropUpdate('source', node, prevNode)) {
        element.setSource(props.source);
      }
      break;
    case 'group':
      if (shouldPropUpdate('name', node, prevNode)) {
        element.setName(props.name);
      }
      break;
    case 'button':
      if (shouldPropUpdate('label', node, prevNode)) {
        element.setLabel(props.label);
      }

      const clickStatus = shouldPropUpdate('onClick', node, prevNode);
      if (clickStatus) {
        element.removeAllListeners('click');
        element.on('click', props.onClick);
      }
      break;
  }
}

function shouldPropUpdate (prop: string, nextNode: Object, prevNode?: ?Object) {
  if (prevNode && typeof prevNode.props[prop] !== 'undefined') {
    return nextNode.props[prop] !== prevNode.props[prop] ? STATUS_UPDATED : STATUS_NO_CHANGE;
  }

  return typeof nextNode.props[prop] !== 'undefined' ? STATUS_CREATED : STATUS_NO_CHANGE;
}
