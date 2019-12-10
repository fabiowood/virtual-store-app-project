import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

// Component Dependencies

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utilities';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {

  // IMPORTANT: with Redux, there is no need to have a constructor, a super and a state anymore. Instead of this.state, we will replace it by this.props.setCurrentUser.

  // The onAuthStateChanged method is an open communication system between Firebase and the application. This is an open subscription and, with this in mind, we need to close it, if there is a change in the user state.

  // To close it, we need to call a method that will unmount our DOM whenever Firebase receives something from the application. Firebase will warn back, that the state has changed, which will trigger the ComponentWillUnmount.

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {

        // if the user is authenticated, then we find the document reference object, and then the snapshot. However, to access the user properties, we need to call the .data() method and combine it to the user id. By then, it will be possible to confirm to the application that the user is actually logged in, because now we are storing the user object in the state of our application.

        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          })
        });
      } else {
        setCurrentUser(
          userAuth
        )
      };
    })
  }

  // Calling the unsubscribe function when the component is about to unmount is the best way to make sure we don't get any memory leaks in our application related to listeners still being open even if the component that cares about the listener is no longer on the page.
  
  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  // We will pass the current user to the header. If the user is logged, we should display a sign-out option. Ohterwise, we will display a sign-in option =>  IMPORTANT: this is no longer needed with Redux!

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

// We need a function that dispatches the Action Object to the reducers, as described below. In this case, we will use connect, but only for its second argument, because the App does not need to control the user state anymore. The App does nothing with the currentUser.

// Translating the code: whatever action object you give me, I will pass it to all reducers.

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
