import React from 'react';
import Highlight from '../Highlight';

const codeString = `import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

const progressEnd = 20;

export default class Interaction extends Component {
  state = {
    n: 0,
    working: false
  };

  handleTimer = () => {
    if (this.state.n <= progressEnd) {
      setTimeout(() => {
        this.setState({
          n: this.state.n + 1
        });

        this.handleTimer();
      }, 300);
    } else {
      this.setState({
        working: false
      });
    }
  };

  handleStart () {
    this.setState({ n: 0, working: true });
    this.handleTimer();
  }

  renderProgressBar () {
    return (
      <ProgressBar
        style={{fontSize: '1.2em', color: '#1abc9c'}}
        progress={this.state.n/progressEnd}
      />
    );
  }

  render () {
    return (
      <container>
        {
          !this.state.working ? <container>
            <text>
              Click on the "<text style={{fontWeight: 'bold'}}>START_ClickHere</text>"
              text below to start progress:
              <text style={{color: 'red'}}> (This works only on chrome)</text>
            </text>
            <button onClick={this.handleStart.bind(this)} label="START_ClickHere"/>
          </container> : null
        }
        {this.state.working ? this.renderProgressBar() : null}
      </container>
    );
  }
}
`;

const Interaction = () => (
  <div>
    <h2>Interaction</h2>
    <div>
      <strong>Warning:</strong> There is no actual API for interactions in consoles. I just have made
      {' '}
      <a
        href="https://github.com/mohebifar/konsul/blob/ec417480d70c1fce5a4ad60d845d683f3d7103e4/src/utils/interaction.js"
      >
        some silly trick
      </a>
      {' '}
      to implement interactions inside the console which works only on Chrome.
    </div>
    <Highlight>{codeString}</Highlight>
  </div>
);

export default Interaction;