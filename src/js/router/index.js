import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';
import { Header, Footer } from '../view/containers';

const RouterContext = () => (
  <ConnectedRouter history={createHistory()}>
    <React.Fragment>
      <Route exact path="/" component={Header} />
      <Route path="/about" component={Footer} />
    </React.Fragment>
  </ConnectedRouter>
);

export default RouterContext;
