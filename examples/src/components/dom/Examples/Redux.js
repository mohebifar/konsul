import React from 'react';
import styled from 'styled-components';
import Highlight from '../Highlight';
import { connect } from 'react-redux';

const ReduxExample = styled.div`
  border-top: 1px dashed #eee;
  border-bottom: 1px dashed #eee;
  padding: 10px 0;
  margin: 15px 0;
  font-size: 20px;
`;

const codeString = `import { connect } from 'react-redux';

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
)(Redux);`;

const Redux = ({ number, dispatch }) => (
  <div>
    <h2>Redux</h2>
    <div>
      The state of DOM and Konsul can be synced through the common Redux store.
      {' '}
      Click on the buttons below to see it in action.
    </div>

    <ReduxExample>
      <div>
        <button onClick={() => dispatch({type: 'INCREASE'})}>Increase +</button>
        <button onClick={() => dispatch({type: 'DECREASE'})}>Decrease -</button>
      </div>
      The current state is: <strong>{number}</strong>
    </ReduxExample>

    <Highlight>{codeString}</Highlight>
  </div>
);

export default connect(
  state => ({ number: state })
)(Redux);