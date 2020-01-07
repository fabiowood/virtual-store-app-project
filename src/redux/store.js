import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { logger } from 'redux-logger';
import rootReducer from './root-reducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
// import { fetchCollectionsStart } from '../redux/shop/shop.sagas';
import rootSaga from './root-saga';

// The store needs the middlewares, which are actually functions that receive inputs and produce new inputs, so we can capture each action and direct it to the root reducer. We will put the middlewares as an array, in order to make it easier for us to add new middlewares to the logger. 

// But first, this array will start as empty, because we will only use the looger in our google chrome dev tools console for the application's development version. The array can be pre-loaded whenever we want to use specific middlewares to handle parallel assynchronous actions, such as redux-thunk and redux-saga:

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
};

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(/* fetchCollectionsStart */ rootSaga);

// The persistor is using the redux-persist library, so we can make the configurations necessary to create a 'cache' of the Store, which will allow the application to persist the store, and therefore, to persist the currentState, even if there is a refresh, or if the user closes the tab/browser.

export const persistor = persistStore(store);

export default { store, persistor };