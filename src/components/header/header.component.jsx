import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import { auth } from '../../firebase/firebase.utilities';

// The signOut() is a method provided by Firebase.

const Header = ({ currentUser }) => {
  return (
    <header className="header">
      <Link to="/" className="logo-container" alt="shop logo">
        <Logo className='logo' />
      </Link>
      <navbar className='options'>
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
      </navbar>
    </header>
  );
};

export default Header;
