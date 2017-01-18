<p align="center">
  <img src="https://www.dropbox.com/s/3wfhnivj3pad9hv/konsul-logo-small.png?dl=1" alt="Konsul" />
</p>

**Konsul** is an abstraction of the browser's `console` that comes with a React renderer. It offers text styling, images, style inheritance, buttons with click interaction, etc. inside the browsers dev console.

[See the live demo here](https://mohebifar.github.io/konsul/)

[![js-semistandard-style](https://cdn.rawgit.com/flet/semistandard/master/badge.svg)](https://github.com/Flet/semistandard)

# Usage
## With react
Install `konsul` and `react-konsul` using npm:

```
npm install konsul react-konsul react
```

The following code demonstrates how you can use konsul with react.

```js
import createKonsul from 'konsul';
import renderToKonsul from 'react-konsul';

// Create an instance of konsul
const konsul = createKonsul();

// Render react elements to the browser console!
renderToKonsul(<text style={{ color: 'red', fontWeight: 'bold' }}>Hello world!</text>, konsul);
```

This is what the result will look like:

![Konsul "Hello world" example](https://www.dropbox.com/s/cyzs5imu6384voc/konsul-hello-world.jpg?dl=1)

[See more examples here](https://github.com/mohebifar/konsul/tree/master/examples/src) with the [live demo](https://mohebifar.github.io/konsul/).

## React element types
### `text`
This node is the only node type that accepts `string`s and `number`s as children.

| Prop | Type | Description |
| --- | --- | --- |
| style | [`TextStyle`](https://github.com/mohebifar/konsul/blob/master/src/types/styles.js#L13) | A plain javascript object whose keys are camel cased property names with their property value. |
| children | `(Text|string|number)[]` | Only `Text`s, `string`s and `number`s are accepted as a Text's children |

### `image`
A Konsul node for displaying images from a url.

| Prop | Type | Description |
| --- | --- | --- |
| style | [`ImageStyle`](https://github.com/mohebifar/konsul/blob/master/src/types/styles.js#L20) | A plain javascript object whose keys are camel cased property names with their property value. |
| source | `string` | The URL of the image. |

### `button`
An interactive node that responds to clicks. **Note that it only works on chrome for now.**

| Prop | Type | Description |
| --- | --- | --- |
| onClick | `function` | Called when the user clicks on the element. |
| label | `string` | The label of the button. It will replace all the characters that are not acceptable for the name of a function with `_`. |

### `group`
All the children of a Group element will be wrapped inside `console.group`.

| Prop | Type | Description |
| --- | --- | --- |
| children | `Node[]` | All kind of elements except `string`s and `number`s are accepted. |

### `container`
This node has no specific behaviour. It works as a container and renders all its children.


| Prop | Type | Description |
| --- | --- | --- |
| children | `Node[]` | All kind of elements except `string`s and `number`s are accepted. |

## Without react
Install `konsul` via npm:

```
npm install konsul
```

The following code is the previous example but without react:

```js
import createKonsul from 'konsul';

// Create an instance of konsul
const konsul = createKonsul();

// Create a text
const text = konsul.text({
  style: {
    color: 'red',
    fontWeight: 'bold'
  }
});

// Append a text to the text element
text.append('Hello world!');

// Append the text element to konsul
konsul.append(text);

// Render to console. The subsequent renders will occur automatically for example by updating the style or children.
konsul.render();
```

# License
Released under the [MIT License](https://mohebifar.mit-license.org/)
