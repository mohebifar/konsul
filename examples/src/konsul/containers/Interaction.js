import React, { Component } from 'react';
import ProgressBar from '../components/ProgressBar';

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
              Progressbar sample.
              Click on "<text style={{fontWeight: 'bold'}}>START</text>"
              below to start progress:
              <text style={{color: 'red'}}> (This only works on chrome)</text>
            </text>
            <button onClick={this.handleStart.bind(this)} label="START - Click here"/>
          </container> : null
        }
        {this.state.working ? this.renderProgressBar() : null}
      </container>
    );
  }
}
