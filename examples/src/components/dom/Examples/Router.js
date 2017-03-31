import React from 'react';
import Highlight from '../Highlight';

const codeString = `renderToKonsul(
  (
    <Provider store={store}>
      <Router>
        <container>
          <text>👇 Everything that you see below is rendered by Konsul! 👇</text>
          <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route path="/code" component={CodeHighlight}/>
            <Route path="/image" component={Image}/>
            <Route path="/interaction" component={Interaction}/>
            <Route path="/timer" component={Interaction}/>
          </Switch>
        </container>
      </Router>
    </Provider>
  ), konsul);`;

const Router = () => (
  <div>
    <h2>Router</h2>
    <div>
      This whole example is essentially routed by
      {' '}
      <a href="https://github.com/ReactTraining/react-router">React Router</a>!
    </div>
    <Highlight>{codeString}</Highlight>
  </div>
);

export default Router;