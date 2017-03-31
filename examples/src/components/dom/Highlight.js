import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

const Highlight = ({className, children}) => (
  <SyntaxHighlighter className={className} language="jsx" style={docco} showLineNumbers>
    {children}
  </SyntaxHighlighter>
);

export default styled(Highlight)`
  box-shadow: inset 1px 1px 7px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
`;
