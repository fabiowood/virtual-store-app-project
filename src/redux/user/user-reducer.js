import { userActionTypes } from './user.action.types';

// We need to set the initial state to Redux:

const INITIAL_STATE = {
  currentUser: null
}

// We need to set a function to change the state. It is necessary to have a default (or else) statement, because the reducer will receive many actions at first, no matter the type of action. That reducer will only generate a new object, in case the action.type is the one that this reducer has the control.

const userReducer = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...currentState,
        currentUser: action.payload
      }
    default:
      return currentState;
  }
}

export default userReducer;