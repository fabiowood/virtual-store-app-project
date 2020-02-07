import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import "./directory.styles.scss";

// Component Dependencies

import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ sections }) => {
    return (
      <section className="directory-menu">
        {
          sections.map(({ id, ...otherSectionProps }) => {
            return (
              <MenuItem key={id} {...otherSectionProps} />
            )
          })

        }
      </section>
    );
  }

const mapStateToProps = createStructuredSelector({
  // This can be a property with any name =>  it is not related to the properties inside the RootReducer and the DirectoryReducer:
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
