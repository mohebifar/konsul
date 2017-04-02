import React, { Component } from 'react';
import styled from './KonsulStyledComponent/styledComponentKonsul';

const image = 'https://cdn.pixabay.com/photo/2017/03/30/04/14/house-2187170_960_720.jpg';

const StyledText = styled.text`
  font-size: 20px;
  color: ${props => props.color};
  text-shadow: 1px 2px 3px pink;
`;

const RoundedImage = styled.image`
  width: 240;
  height: 180;
  border: 2px solid ${props => props.borderColor};
  border-radius: 5px;
`;

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
