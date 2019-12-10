import { combineReducers } from 'redux';
import userReducer from './user/user-reducer';

// We need to import all the Reducers to the Root Reducer:

export default combineReducers({
  user: userReducer
});

