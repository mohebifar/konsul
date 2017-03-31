import React from 'react';

export const styles = {
  main: {
    color: '#383a42',
    fontFamily: 'monospace'
  },
  'hljs-comment': { 'color': '#a0a1a7', 'fontStyle': 'italic' },
  'hljs-quote': { 'color': '#a0a1a7', 'fontStyle': 'italic' },
  'hljs-doctag': { 'color': '#a626a4' },
  'hljs-keyword': { 'color': '#a626a4' },
  'hljs-formula': { 'color': '#a626a4' },
  'hljs-section': { 'color': '#e45649' },
  'hljs-name': { 'color': '#e45649' },
  'hljs-selector-tag': { 'color': '#e45649' },
  'hljs-deletion': { 'color': '#e45649' },
  'hljs-subst': { 'color': '#e45649' },
  'hljs-literal': { 'color': '#0184bb' },
  'hljs-string': { 'color': '#50a14f' },
  'hljs-regexp': { 'color': '#50a14f' },
  'hljs-addition': { 'color': '#50a14f' },
  'hljs-attribute': { 'color': '#50a14f' },
  'hljs-meta-string': { 'color': '#50a14f' },
  'hljs-built-in': { 'color': '#c18401' },
  'hljs-attr': { 'color': '#986801' },
  'hljs-variable': { 'color': '#986801' },
  'hljs-template-variable': { 'color': '#986801' },
  'hljs-type': { 'color': '#986801' },
  'hljs-selector-class': { 'color': '#986801' },
  'hljs-selector-attr': { 'color': '#986801' },
  'hljs-selector-pseudo': { 'color': '#986801' },
  'hljs-number': { 'color': '#986801' },
  'hljs-symbol': { 'color': '#4078f2' },
  'hljs-bullet': { 'color': '#4078f2' },
  'hljs-link': { 'textDecoration': 'underline' },
  'hljs-meta': { 'color': '#4078f2' },
  'hljs-selector-id': { 'color': '#4078f2' },
  'hljs-title': { 'color': '#4078f2' },
  'hljs-emphasis': { 'fontStyle': 'italic' },
  'hljs-strong': { 'fontWeight': 'bold' }
};

function mapChild (child, i, depth) {
  if (child.tagName) {
    const style = child.properties.className
      .map(className => styles[className])
      .filter(style => style)
      .reduce((a, b) => ({ ...a, ...b }), {});

    return (
      <text key={`lo-${depth}-${i}`} style={style}>
        {child.children && child.children.map(mapWithDepth(depth + 1))}
      </text>
    );
  }

  return child.value;
}

export function mapWithDepth (depth) {
  return function mapChildrenWithDepth (child, i) {
    return mapChild(child, i, depth);
  }
}
