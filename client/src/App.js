import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { GlobalStyle } from './global.styles';

// Component Dependencies

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
// import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckOutPage from './pages/checkout-page/checkout-page.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
// import { selectOneCollectionToDisplay } from './redux/shop/shop.selectors'; => IMPORTANT: this selector was used just one time, to load the shop data to the firebase!!

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        {/* <Route path='/sign-in' render={() => currentUser ? <Redirect to='/' /> : <SignInSignUpPage /> } /> */}
        <Route path='/checkout' component={CheckOutPage} />
      </Switch>
    </div>
  );
}

// Translating the line code below: give me the state of the user object, which is inside the UserReducer, and then apply it to my currentUser state. 

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  // collectionsArray: selectOneCollectionToDisplay => IMPORTANT: this selector was used just one time, to load the shop data to the firebase!!
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
