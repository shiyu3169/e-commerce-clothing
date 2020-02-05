import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cartAction';

import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooter,
  ButtonContainer,
  PriceSpan,
  NameSpan
} from './CollectionItemStyle';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooter>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>${price}</PriceSpan>
      </CollectionFooter>
      <ButtonContainer inverted onClick={() => addItem(item)}>
        {' '}
        ADD TO CART{' '}
      </ButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
