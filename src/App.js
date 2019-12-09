import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Component Dependencies

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utilities';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentUser: null,
    }
  }

  //Firebase has a feature that is called session persistence. Even if there is a page refresh or the user closes the application window, Firebase will assume the user is still logged-in, because there wasn't a sign-out event. And Firebase will continue passing the user object to the application, to whatever components we need to.

  // the onAuthStateChanged method is an open communication system between Firebase and the application. This is an open subscription and, with this in mind, we need to close it, if there is a change in the user state.

  // To close it, we need to call a method that will unmount our DOM whenever Firebase receives something from the application. Firebase will warn back, that the state has changed, which will trigger the ComponentDidMount() lifecycle method and, after that, the ComponentWillUnmount.

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {

        // if the user is authenticated, then we find the document reference object, and then the snapshot. However, to access the user properties, we need to call the .data() method and combine it to the user id. By then, it will be possible to confirm to the application that the user is actually logged in, because now we are storing the user object in our application.

        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => console.log(this.state))
        })
      } else {
        this.setState({
          currentUser: userAuth
        }, () => console.log(this.state))
      }
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  // We will pass the current user to the header. If the user is logged, we should display a sign-out option. Ohterwise, we will display a sign-in option.

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
