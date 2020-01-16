import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shopSelector";
import CollectionItem from "../../components/CollectionItem/CollectionItem";

import "./Collection.scss";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2>{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
