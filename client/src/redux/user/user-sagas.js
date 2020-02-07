import { takeLatest, all, call, put } from 'redux-saga/effects';
import userActionTypes from './user.action.types';
// import { googleSignInSuccess, googleSignInFailure, emailSignInSuccess, emailSignInFailure } from './user.actions';
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure } from './user.actions';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utilities';


export function* getSnapshotFromUserAuth(user, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
  }
  catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUpWithEmail);
}


export function* signUpWithEmail({payload: {email, password, displayName}}) {
  try {
    const {user} = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({user, additionalData: { displayName }}));
  }
  catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signUpWithSuccess() {
  yield takeLatest(
    userActionTypes.SIGN_UP_SUCCESS,
    signInAfterSignUp
  )
}

export function* signInAfterSignUp({ payload: { user, additionalData} }) {
  yield getSnapshotFromUserAuth(user, additionalData)
}

export function* googleSignInStart() {
  yield takeLatest(
    userActionTypes.GOOGLE_SIGN_IN_START,
    signInWithGoogle
  )
}

export function* signInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  }
  catch (error) {
    yield put(signInFailure(error));
  }
}

export function* emailSignInStart() {
  yield takeLatest(
    userActionTypes.EMAIL_SIGN_IN_START,
    signInWithEmail
  )
}

export function* signInWithEmail({payload: {email, password}}) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
    
  }
  catch (error) {
    yield put(signInFailure(error));
   }
}

  export function* checkUserSession() {
    yield takeLatest(
      userActionTypes.CHECK_USER_SESSION,
      isUserAuthenticated
    )
  }
  
  export function* isUserAuthenticated() {
    try{
      const userAuth = yield getCurrentUser();
      if(!userAuth) {
        return;
      } else {
        yield getSnapshotFromUserAuth(userAuth);
      }
    }
    catch (error) {
      yield put(signInFailure(error));
    }
  }

  export function* onSignOutStart() {
    yield takeLatest(
      userActionTypes.SIGN_OUT_START,
      signOutFromApp
    )
  }

  export function* signOutFromApp() {
    try {
      yield auth.signOut();
      yield put(signOutSuccess());
    }
    catch (error) {
      yield put(signOutFailure(error));
    }
  }

  export function* userSagas() {
  yield all([
    call(googleSignInStart), 
    call(emailSignInStart),
    call(checkUserSession),
    call(onSignOutStart),
    call(signUpStart),
    call(signUpWithSuccess)
    ]);
  }
