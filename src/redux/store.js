import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

// The store needs the middlewares, which are actually functions that receive inputs and produce inputs, so we can capture each action and direct it to the root reducer. We will put the middlewares as an array, in order to make it easier for us to add new middlewares to the logger:

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;