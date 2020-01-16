import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cartAction";

import {
  CheckoutItemContainer,
  ImageContainer,
  SpanContainer,
  QuantityContainer,
  RemoveButtonContainer
} from "./CheckoutItemStyle";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <SpanContainer>{name}</SpanContainer>
      <QuantityContainer className="quantity">
        <div
          onClick={() => {
            removeItem(cartItem);
          }}
        >
          &#10094;
        </div>
        <span>{quantity}</span>
        <div
          onClick={() => {
            addItem(cartItem);
          }}
        >
          &#10095;
        </div>
      </QuantityContainer>
      <SpanContainer>{price}</SpanContainer>
      <RemoveButtonContainer
        onClick={() => {
          clearItem(cartItem);
        }}
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
