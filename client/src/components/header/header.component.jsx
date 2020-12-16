import React from "react";
// import { Link } from "react-router-dom"; => replaced by styled-components!
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { ReactComponent as Logo } from "../../assets/crown.svg";
// import "./header.styles.scss"; => replaced by styled-components!
// import { auth } from '../../firebase/firebase.utilities'; => replaced by redux-saga!

// Component Dependencies
  
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHiddenDropdown } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
// These are the Header styled-components, creating styles through JavaScript:
import { HeaderContainer, LogoContainer, OptionsContainer, SingleOptionContainer, LinkOptionContainer } from './header.styles'; 


 // We are receiving the current user to define what to display inside the header. If the user is logged, we should display a sign-out option. Ohterwise, we will display a sign-in option.

const Header = ({ currentUser, hiddenDropdown, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/" alt="shop logo">
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <LinkOptionContainer to='/shop'>
          LOJA
        </LinkOptionContainer>
        <LinkOptionContainer>
          <a  href='mailto:fabgmad@gmail.com'>
            CONTATO
          </a>
        </LinkOptionContainer>
        { /*
          currentUser ?
            (<SingleOptionContainer onClick={signOutStart}>
            SIGN OUT
            </SingleOptionContainer>) :
            (<LinkOptionContainer to='/sign-in'>
            SIGN IN
            </LinkOptionContainer>) */
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

// Note: mapStateTo Props is not a default name, but is the most used function name by developers.

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hiddenDropdown: selectCartHiddenDropdown
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

// Connect is a high order component (HOC). A HOC is a function that receives a component as a argument and returns a new component, with higher privileges. This code will also be used several times in our application.

export default connect(mapStateToProps, mapDispatchToProps)(Header);
