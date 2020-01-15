import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./Directory.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directorySelector";
import { createStructuredSelector } from "reselect";

export function Directory({ sections }) {
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
