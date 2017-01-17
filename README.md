# Konsul
**Konsul** is an abstraction of the browser's `console` that comes with a React renderer. It offers text styling, images, style inheritance, buttons with click interaction, etc. inside the browsers dev console.

[![js-semistandard-style](https://cdn.rawgit.com/flet/semistandard/master/badge.svg)](https://github.com/Flet/semistandard)

# Usage
## Using with react
Install it using npm:

```
npm install konsul react
```

The following code demonstrates how you can use konsul with react.

```js
import createKonsul from 'konsul';
import renderToKonsul from 'react-konsul';

// Create an instance of konsul
const konsul = createKonsul();

// Render react elements to the browser console!
renderToKonsul(<text style={{ color: 'red' }}>Hello world!</text>, konsul);
```

This is what the result will look like:

![Konsul "Hello world" example](https://www.dropbox.com/s/cyzs5imu6384voc/konsul-hello-world.jpg?dl=1)
