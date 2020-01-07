// In this file, we will configure the actions that will trigger the rootReducer. 

// The function below returns a action object, which will be dispatched later on to all the application Reducers! See more in the App.js

import userActionTypes from './user.action.types';

export const setCurrentUser = user => {
  return ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
  })
};

export const googleSignInStart = () =>  ({
      type: userActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailAndPassword => ({
      type: userActionTypes.EMAIL_SIGN_IN_START,
      payload: emailAndPassword
});

export const signInSuccess = user => ({
      type: userActionTypes.SIGN_IN_SUCCESS,
      payload: user
});

export const signInFailure = error => ({
      type: userActionTypes.SIGN_IN_FAILURE,
      payload: error
});

export const checkUserSession = () => ({
      type: userActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
      type: userActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
      type: userActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = error => ({
      type: userActionTypes.SIGN_OUT_FAILURE,
      payload: error
});
