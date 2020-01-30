import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './App.css';

// Component Dependencies

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckOutPage from './pages/checkout-page/checkout-page.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
// import { auth, createUserProfileDocument } from './firebase/firebase.utilities';
// import { setCurrentUser } from './redux/user/user.actions';
// import { selectOneCollectionToDisplay } from './redux/shop/shop.selectors'; => IMPORTANT: this selector was used just one time, to load the shop data to the firebase!!

class App extends Component {

  // IMPORTANT: with Redux, there is no need to have a constructor, a super and a state anymore. Instead of this.state, we will replace it by this.props.setCurrentUser, for example.

  // Calling the unsubscribe function when the component is about to unmount is the best way to make sure we don't get any memory leaks in our application related to listeners still being open even if the component that cares about the listener is no longer on the page.

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }
     
  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInSignUpPage /> } />
          <Route path='/checkout' component={CheckOutPage} />
        </Switch>
      </div>
    );
  }
}

// Translating the line code below: give me the state of the user object, which is inside the UserReducer, and then apply it to my currentUser state. 

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  // collectionsArray: selectOneCollectionToDisplay => IMPORTANT: this selector was used just one time, to load the shop data to the firebase!!
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
  // setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
