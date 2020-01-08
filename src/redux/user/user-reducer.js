import userActionTypes from './user.action.types';

// We need to set the initial state to Redux:

const INITIAL_STATE = {
  currentUser: null,
  error: null
}

// We need to set a function to change the state. It is necessary to have a default (or else) statement, because the reducer will receive many actions at first, no matter the type of action. That reducer will only generate a new object, in case the action.type is the one that this reducer has the control.

const userReducer = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case userActionTypes.SIGN_UP_SUCCESS:
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...currentState,
        currentUser: action.payload,
        error: null,
      }
    case userActionTypes.SIGN_UP_FAILURE:
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
      return {
        ...currentState,
        error: action.payload,
      }
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...currentState,
        currentUser: null,
        error: null,
      }
    default:
      return currentState;
  }
}

export default userReducer;