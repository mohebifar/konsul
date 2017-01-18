import React from 'react';
import ReactDOM from 'react-dom';
import renderToKonsul from '../../lib-react';
import createKonsul from '../../lib';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './dom/components/App';
import Code from './konsul/containers/Code';
import Welcome from './konsul/containers/Welcome';
import Image from './konsul/containers/Image';
import Interaction from './konsul/containers/Interaction';
import Counter from './konsul/containers/Counter';
import './index.css';

const konsul = createKonsul();

renderToKonsul(
  (
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRoute component={Welcome}/>
        <Route path="/code" component={Code}/>
        <Route path="/image" component={Image}/>
        <Route path="/interaction" component={Interaction}/>
        <Route path="/counter" component={Counter}/>
      </Route>
    </Router>
  ), konsul);

ReactDOM.render(<App />,  document.getElementById('root'));