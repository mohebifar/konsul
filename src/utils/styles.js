import type { TextStyle } from '../types/styles';

export function makeString(style: TextStyle) {
  return style === null ? null : Object
    .keys(style)
    .map(property => `${getPropertyName(property)}: ${style[property]}`)
    .join(';');
}

export function getPropertyName(property) {
  return property.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}