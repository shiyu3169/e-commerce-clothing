import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shopSelector";
import CollectionItem from "../../components/CollectionItem/CollectionItem";

import {
  CollectionContainer,
  TitleContainer,
  ItemsContainer
} from "./CollectionStyle";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionContainer className="collection-page">
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
