import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/dom/App';
import renderToKonsul from '../../packages/react-konsul';
import createKonsul from '../../packages/konsul';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Welcome from './components/konsul/Welcome/Welcome';
import CodeHighlight from './components/konsul/CodeHighlight/CodeHighlight';
import Image from './components/konsul/Image/Image';
import Interaction from './components/konsul/Interaction/Interaction';
import Timer from './components/konsul/Timer/Timer';
import Redux from './components/konsul/Redux/Redux';
import StyledComponent from './components/konsul/StyledComponent/StyledComponent';

import './index.css';

const konsul = createKonsul();

function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer);

renderToKonsul(
  (
    <Provider store={store}>
      <Router>
        <container>
          <text>👇 Everything that you see below is rendered by Konsul! 👇</text>
          <Switch>
            <Route path="/code" component={CodeHighlight}/>
            <Route path="/image" component={Image}/>
            <Route path="/interaction" component={Interaction}/>
            <Route path="/timer" component={Timer}/>
            <Route path="/redux" component={Redux}/>
            <Route path="/styled" component={StyledComponent}/>
            <Route path="/" component={Welcome}/>
          </Switch>
        </container>
      </Router>
    </Provider>
  ), konsul);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
