import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import { auth } from '../../firebase/firebase.utilities';

 // We are receiving the current user to define what to display inside the header. If the user is logged, we should display a sign-out option. Ohterwise, we will display a sign-in option.

 // For that, we need to import the auth() method from Firebase.

// The signOut() is a method provided by Firebase.

const Header = ({ currentUser }) => {
  return (
    <header className="header">
      <Link to="/" className="logo-container" alt="shop logo">
        <Logo className='logo' />
      </Link>
      <nav className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/shop' className='option'>
          CONTACT
        </Link>
        {
          currentUser ?
            (<div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
            </div>) :
            (<Link to='/sign-in' className='option'>
            SIGN IN
            </Link>)
        }
      </nav>
    </header>
  );
};

// Below we are writing a function that will returns us the state of a property inside a specified reducer. This code will be used several times in our application. Note: mapStateTo Props is not a default name, but is the one most used function name by developers.

// Translating the code: give me the state of the user object, which is inside the UserReducer, and then apply it to my currentUser state.

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

// Connect is a high order component (HOC). A HOC is a function that receives a component as a argument and returns a new component, with new privileges. This code will also be used several times in our application.

export default connect(mapStateToProps)(Header);
