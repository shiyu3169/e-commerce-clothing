import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import "./CollectionPreview.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...item }) => (
            <CollectionItem key={id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
