import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-basis: 200px;
  min-width: 200px;
  flex-direction: column;
  background-color: rgb(187, 25, 127);
  min-height: 100%;
  padding: 15px;
  color: #FFF;
  
  h3 {
    margin-bottom: 0;
    font-weight: 300;
  }
  
  a {
    display: block;
    text-decoration: none;
    margin: 5px 0;
    font-weight: 300;
    color: #FFF;

    &.selected {
      font-weight: 500;
    }
  }
`;

const Hr = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #ea41ac;
  border: none;
`;

const Link = ({children, ...rest}) => (
  <NavLink activeClassName="selected" {...rest}>{children}</NavLink>
);

const Sidebar = () => (
  <Wrapper>
    <h3>Examples</h3>
    <Hr/>
    <Link exact to="/">Basic Usage</Link>
    <Link to="/code">Code Highlighter</Link>
    <Link to="/image">Image</Link>
    <Link to="/timer">Stateful Components</Link>
    <Link to="/interaction">Interaction</Link>
    <Link to="/redux">Redux</Link>
    <Link to="/router">Router</Link>
    <Hr/>
    <a href="https://github.com/mohebifar/konsul">Source on Github</a>
  </Wrapper>
);

export default Sidebar;
