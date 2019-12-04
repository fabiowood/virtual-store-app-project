import React from "react";
import "./homepage.styles.scss";

// Components Dependencies

import Directory from '../../components/directory/directory.component';

const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
