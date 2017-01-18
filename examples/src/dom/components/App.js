import React, { Component } from 'react';
import logo from '../../images/logo.png';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to Konsul!</h2>
        </div>

        <div>
          <strong>See examples:</strong>
          <ul className="App-navigation">
            <li><a href="?basic#/">Basic</a></li>
            <li><a href="?code#/code">Code Highlight</a></li>
            <li><a href="?image#/image">Image</a></li>
            <li><a href="?interaction#/interaction">Interaction</a></li>
            <li><a href="?counter#/counter">Counter</a></li>
          </ul>
        </div>

        <div className="App-intro">
          <p>Open your browser's dev console to see what Konsul does!</p>
            <p><code>⌘+⇧+J</code> (Mac)</p>
            <p><code>CTRL+SHIFT+J</code> (Linux & Windows)</p>
        </div>
      </div>
    );
  }
}

export default App;
