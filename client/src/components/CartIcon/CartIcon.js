import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cartAction";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer
} from "./CartIconStyle";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIconContainer className="shopping-icon" />
      <ItemCountContainer className="item-count">
        {itemCount}
      </ItemCountContainer>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
