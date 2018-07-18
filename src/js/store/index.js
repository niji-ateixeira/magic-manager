/*
  Fichier permettant la création du store

  Date de modification: 28/08/2017
*/

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import CoreReducer from './coreReducer';

const routeMiddleware = routerMiddleware(createHistory());

const sagaMiddleware = createSagaMiddleware();
// Creation du store
const middlewares = [sagaMiddleware, logger, routeMiddleware];
const store = createStore(CoreReducer, applyMiddleware(...middlewares));


export default store;
