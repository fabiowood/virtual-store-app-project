import React from "react";
import { Link } from "react-router-dom";
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

export default Header;
