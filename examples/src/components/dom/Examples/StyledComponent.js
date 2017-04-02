import React from 'react';
import Highlight from '../Highlight';

const codeString = `import styled from './KonsulStyledComponent/styledComponentKonsul'; // This is my own implementation of styled components

const StyledText = styled.text\`
  font-size: 20px;
  color: \${props => props.color};
  text-shadow: 1px 2px 3px pink;
\`;

const RoundedImage = styled.image\`
  width: 240;
  height: 180;
  border: 2px solid \${props => props.borderColor};
  border-radius: 5px;
\`;

class StyledComponentExample extends Component {
  state = {
    color: 'maroon'
  };

  changeColor() {
    this.setState(
      state => ({
        color: state.color === 'maroon' ? 'green' : 'maroon'
      })
    );
  }

  render() {
    return (
      <container>
        <StyledText color={this.state.color}>Styled Text!</StyledText>
        <RoundedImage borderColor={this.state.color} source={image}/>
        <button onClick={this.changeColor.bind(this)} label="ChangeColor" />
      </container>
    );
  }
}

export default StyledComponentExample;
`;

const Interaction = () => (
  <div>
    <h2>Styled Components 💅</h2>
    <div>
      I used <a href="https://github.com/styled-components/styled-components">styled-components</a>'s code for
      React native and ported it to Konsul just as an experiment. Of course, it is not an official port and depends on
      internal APIs of styled-components which is not safe.
    </div>
    <Highlight>{codeString}</Highlight>
  </div>
);

export default Interaction;