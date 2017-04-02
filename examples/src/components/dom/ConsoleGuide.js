import React from 'react';
import styled from 'styled-components';

const OpenDevTools = styled.div`
  font-weight: 500;
  font-size: 1.1em;
  padding: 10px 0;
  text-align: center;
  margin: 0;
`;

const Instruction = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  margin: 5px auto;
  font-weight: 400;

  .platform {
    flex-basis: 50%;
    text-align: left;
    padding-left: 10px;
  }

  .shortcut {
    flex-basis: 50%;
    text-align: right;
    padding-right: 10px;
  }
`;

const ConsoleGuide = (props) => (
  <div {...props}>
    <OpenDevTools>
      Open the console and see how it works!
    </OpenDevTools>
    <Instruction>
      <div className="shortcut">⌘+⌥+J</div>
      <div className="platform">Mac</div>
    </Instruction>
    <Instruction>
      <div className="shortcut">Ctrl+Shift+J</div>
      <div className="platform">Linux & Windows</div>
    </Instruction>
  </div>
);

export default ConsoleGuide;
