import React, { Component } from "react";
import SHOP_DATA from "./data";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

export class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, items, title }) => (
          <CollectionPreview key={id} items={items} title={title} />
        ))}
      </div>
    );
  }
}

export default Shop;
