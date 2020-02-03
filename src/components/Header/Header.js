import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cartSelector';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { signOutStart } from '../../redux/user/userAction';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './HeaderStyle';

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/sign'>SINGN IN / SIGN UP</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
