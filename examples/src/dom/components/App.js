import React, { Component } from 'react';
import logo from '../../images/logo.png';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <a href="https://github.com/mohebifar/konsul">
          <img style={{position: 'absolute', top: 0, right: 0, border: 0}}
               src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
               alt="Fork me on GitHub"
          />
        </a>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to Konsul!</h2>
        </div>

        <div>
          <strong>See the examples:</strong>
          <ul className="App-navigation">
            <li><a href="?basic#/">Basic</a></li>
            <li><a href="?code#/code">Code Highlight</a></li>
            <li><a href="?image#/image">Image</a></li>
            <li><a href="?interaction#/interaction">Interaction</a></li>
            <li><a href="?counter#/counter">Counter</a></li>
          </ul>
        </div>

        <div className="App-intro">
          Please open the console.
          <div className="App-instruction">
            <div><code>⌘+⌥+J</code> Mac</div>
            <div><code>CTRL+SHIFT+J</code> Linux & Windows</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
