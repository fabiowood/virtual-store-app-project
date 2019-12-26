import React from "react";
// import { Link } from "react-router-dom"; => replaced by styled-components!
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { ReactComponent as Logo } from "../../assets/crown.svg";
// import "./header.styles.scss"; => replaced by styled-components!
import { auth } from '../../firebase/firebase.utilities';

// Component Dependencies

import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHiddenDropdown } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
// These are the Header styled-components, creating styles through JavaScript:
import { HeaderContainer, LogoContainer, OptionsContainer, SingleOptionContainer, LinkOptionContainer } from './header.styles'; 


 // We are receiving the current user to define what to display inside the header. If the user is logged, we should display a sign-out option. Ohterwise, we will display a sign-in option.

// The signOut() is a method provided by Firebase.

const Header = ({ currentUser, hiddenDropdown }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/" alt="shop logo">
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <LinkOptionContainer to='/shop'>
          SHOP
        </LinkOptionContainer>
        <LinkOptionContainer to='/shop'>
          CONTACT
        </LinkOptionContainer>
        {
          currentUser ?
            (<SingleOptionContainer onClick={() => auth.signOut()}>
            SIGN OUT
            </SingleOptionContainer>) :
            (<LinkOptionContainer to='/sign-in'>
            SIGN IN
            </LinkOptionContainer>)
        }
        <CartIcon />
      </OptionsContainer>
      {
        hiddenDropdown ?
        null 
        :
        <CartDropdown />
      }
    </HeaderContainer>
  );
};

// Below we are writing a function that will returns us the state of a property inside a specified reducer. This code will be used several times in our application. Note: mapStateTo Props is not a default name, but is the one most used function name by developers.

// Translating the code: give me the state of the user object, which is inside the UserReducer or the CartReducer, and then apply it to my currentUser and hiddenDropdown states.

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hiddenDropdown: selectCartHiddenDropdown
  // currentUser: state.user.currentUser,
  // hiddenDropdown: state.cartDropdownDisplay.hiddenDropdown
  // Now the component is memoized.
});

// Connect is a high order component (HOC). A HOC is a function that receives a component as a argument and returns a new component, with higher privileges. This code will also be used several times in our application.

export default connect(mapStateToProps)(Header);
