import React, { Component } from "react";
import "./directory.styles.scss";

// Component Dependencies

import MenuItem from "../menu-item/menu-item.component";

class Directory extends Component {
  constructor() {
    super();
    // this must be a class component, because it will contain a list of objects to be displayed and, therefore, there must be an initial state.
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: ''
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: ''
        },
        {
          title: "women",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: ''
        },
        {
          title: "men",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: ''
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({ id, ...otherSectionProps }) => {
            return (
              <MenuItem key={id} {...otherSectionProps} />
            )
          })

        }
      </div>
    );
  }
}

export default Directory;
