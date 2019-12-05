import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = () => {
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
      </navbar>
    </header>
  );
};

export default Header;
