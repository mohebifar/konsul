import React from 'react';
import Highlight from '../Highlight';

const codeString = `import React, { Component } from 'react';

const textStyle = {
  fontSize: '1.6em',
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
};

const boxStyle = {
  color: 'transparent',
  padding: '10px',
  fontSize: '1px',
  borderRadius: '5px',
  lineHeight: '30px'
};

class Timer extends Component {
  state = {
    seconds: 0
  };

  timeout = 0;

  componentDidMount() {
    this.tick();
  }

  tick() {
    this.setState({
      seconds: this.state.seconds + 1
    });

    this.timeout = setTimeout(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { seconds } = this.state;

    const style = {
      ...boxStyle,
      backgroundColor: seconds % 2 === 0 ? 'green' : 'red',
    };

    return (
      <container>
        <text style={textStyle}>
          <text style={{fontWeight: 'bold'}}>{seconds} </text>
          second{seconds > 1 ? 's' : ''} past!
        </text>
        <text style={style}>+</text>
      </container>
    );
  }
}

export default Timer;`;

const Welcome = () => (
  <div>
    <h2>Stateful Components (Timer)</h2>
    <Highlight>{codeString}</Highlight>
  </div>
);

export default Welcome;