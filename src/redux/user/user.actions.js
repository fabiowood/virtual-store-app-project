// In this file, we will configure the actions that will trigger the rootReducer. 

// The function below returns a action object, which will be dispatched later on to all the application Reducers! See more in the App.js

export const setCurrentUser = user => {
  return ({
    type: 'SET_CURRENT_USER',
    payload: user
  })
};

