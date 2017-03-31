import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import GithubCorner from './GithubCorner';
import Sidebar from './Sidebar';
import Welcome from './Examples/Welcome';
import CodeHighlight from './Examples/CodeHighlight';
import Image from './Examples/Image';
import Interaction from './Examples/Interaction';
import Router from './Examples/Router';
import Redux from './Examples/Redux';
import Timer from './Examples/Timer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 60px;
  line-height: 1.6;
  color: #333;

  h2 {
    font-weight: 300;
  }
  
  a {
    color: #444;
    &:hover {
      color: #777;
    }
  }
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Sidebar />
        <Content>
          <Route exact path="/" component={Welcome}/>
          <Route path="/code" component={CodeHighlight}/>
          <Route path="/image" component={Image}/>
          <Route path="/interaction" component={Interaction}/>
          <Route path="/timer" component={Timer}/>
          <Route path="/router" component={Router}/>
          <Route path="/redux" component={Redux}/>
        </Content>
        <GithubCorner />
      </Wrapper>
    );
  }
}

export default App;
