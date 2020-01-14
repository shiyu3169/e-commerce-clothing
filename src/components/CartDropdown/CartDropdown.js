import React from "react";
import { connect } from "react-redux";
import "./CartDropdown.scss";
import Button from "../Button/Button";
import CartItem from "../CarItem/CartItem";
import { selectCartItems } from "../../redux/cart/cartSelector";
const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
