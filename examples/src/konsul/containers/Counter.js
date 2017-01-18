import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    seconds: 0
  };

  componentDidMount () {
    this.tick();
  }

  tick () {
    this.setState({
      seconds: this.state.seconds + 1
    });

    setTimeout(() => this.tick(), 1000);
  }

  render () {
    const { seconds } = this.state;

    const style = {
      backgroundColor: seconds % 2 === 0 ? 'green' : 'red',
      color: 'transparent',
      padding: '10px',
      fontSize: '1px',
      borderRadius: '5px',
      lineHeight: '30px'
    };

    return (
      <container>
        <text style={{fontSize: '1.6em', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'}}>
          <text style={{fontWeight: 'bold'}}>{seconds} </text>
          seconds past!
        </text>
        <text style={style}>+</text>
      </container>
    );
  }
}
