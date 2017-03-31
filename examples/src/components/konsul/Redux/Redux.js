import React, { Component } from 'react';
import { connect } from 'react-redux';

class Redux extends Component {
  render() {
    const { number, dispatch } = this.props;

    return (
      <container>
        <text style={{fontSize: '20px'}}>
          The current state is: <text style={{fontWeight: 'bold'}}>{number} </text>
        </text>
        <text>You can also dispatch actions from console by clicking on the buttons below:</text>
        <button onClick={() => dispatch({type: 'INCREASE'})} label="Increase" />
        <button onClick={() => dispatch({type: 'DECREASE'})} label="Decrease" />
      </container>
    );
  }
}

export default connect(
  state => ({
    number: state
  })
)(Redux);
