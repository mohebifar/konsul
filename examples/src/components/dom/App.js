import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import GithubCorner from './GithubCorner';
import Sidebar from './Sidebar';
import ConsoleGuide from './ConsoleGuide';
import Welcome from './Examples/Welcome';
import CodeHighlight from './Examples/CodeHighlight';
import Image from './Examples/Image';
import Interaction from './Examples/Interaction';
import Router from './Examples/Router';
import Redux from './Examples/Redux';
import Timer from './Examples/Timer';
import StyledComponent from './Examples/StyledComponent';

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
  renderRoutes() {
    return (
      <div>
        <ConsoleGuide style={{background: 'rgb(249, 249, 249)', padding: 15}} />
        <Route path="/code" component={CodeHighlight}/>
        <Route path="/image" component={Image}/>
        <Route path="/interaction" component={Interaction}/>
        <Route path="/timer" component={Timer}/>
        <Route path="/router" component={Router}/>
        <Route path="/redux" component={Redux}/>
        <Route path="/styled" component={StyledComponent}/>
      </div>
    );
  }

  render() {
    return (
      <Wrapper>
        <Sidebar />
        <Content>
          <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route path="/" render={this.renderRoutes}/>
          </Switch>
        </Content>
        <GithubCorner />
      </Wrapper>
    );
  }
}

export default App;
