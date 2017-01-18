<p align="center">
  <img src="https://www.dropbox.com/s/3wfhnivj3pad9hv/konsul-logo-small.png?dl=1" alt="Konsul" />
</p>

**Konsul** is an abstraction of the browser's `console` that comes with a React renderer. It offers text styling, images, style inheritance, buttons with click interaction, etc. inside the browsers dev console.

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
