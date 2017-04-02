import React from 'react';
import styled from 'styled-components';
import Highlight from '../Highlight';
import logo from '../../../images/logo.png';
import ConsoleGuide from '../ConsoleGuide';

const codeString = `import React, { Component } from 'react';
import Code from '../CodeHighlight/Highlight';

const styles = {
  welcome: {
    fontWeight: 'bold',
    fontSize: '20px'
  },
  stylishText: {
    textShadow: '1px 2px 1px rgba(0,0,0,0.2)',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: '2em',
    color: '#27abc8'
  }
};

const code = \`class MyComponent extends React.Component {
  render() {
    return (
      <container>
        <text style={styles.welcome}>Welcome to Konsul!</text>
      </container>
    );
  }
}\`;

const Welcome = () => (
  <container>
    <text style={styles.welcome}>Welcome to Konsul!</text>
    <text>
      With Konsul you can
      <text style={styles.stylishText}> style a text</text>
    </text>
    <text>
      You can use react to render into the console:
    </text>
    <text type="warn">
      You can log in different levels
    </text>
    <text type="error">
      And errors
    </text>
    <Code code={code}/>
  </container>
);

export default Welcome;`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
  margin: auto;
  display: block;
`;

const Wrapper = styled.div`
  padding-top: 60px;

  h2 {
    font-weight: 300;
  }
`;

const Welcome = () => (
  <Wrapper>
    <div style={{textAlign: 'center'}}>
      <Logo src={logo} alt="Konsul"/>
      <h2>
        A react renderer that renders to the browser's devtools console
      </h2>

      <div>
        <iframe
          src="https://ghbtns.com/github-btn.html?user=mohebifar&repo=konsul&type=star&count=true&size=large"
          frameBorder="0"
          scrolling="0"
          width="140px"
          height="30px"
        />
      </div>

      <ConsoleGuide />
    </div>
    <div style={{marginTop: 30}}>
      <h2>Basic Example</h2>
      <Highlight>{codeString}</Highlight>
    </div>
  </Wrapper>
);

export default Welcome;