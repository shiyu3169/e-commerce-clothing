import React from "react";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectShopCollections } from "../../redux/shop/shopSelector";
export function Shop({ collections }) {
  return (
    <div>
      {collections.map(({ id, items, title }) => (
        <CollectionPreview key={id} items={items} title={title} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(Shop);
