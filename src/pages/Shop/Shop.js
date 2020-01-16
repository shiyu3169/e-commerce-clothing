import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/CollectionsOverview/CollectionOverview";
import Collection from "../Collection/Collection";

export function Shop({ match }) {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
}

export default Shop;
