// We need to set the initial state to redux:

const INITIAL_STATE = {
  currentUser: null
}

// We need to set a function to change the state. It is necessary to have a default (or else) statement, because all the reducers will receive each action at first, no matter the type of action. That reducer will only generate a new object, in case the action.type is the one that this reducer has the control.

const userReducer = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...currentState,
        currentUser: action.payload
      }
    default:
      return currentState;
  }
}

export default userReducer;