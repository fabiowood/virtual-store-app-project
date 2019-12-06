import React from "react";
import "./homepage.styles.scss";

// Components Dependencies

import Directory from '../../components/directory/directory.component';

const HomePage = () => {
  return (
    <section className="homepage">
      <Directory />
    </section>
  );
};

export default HomePage;
