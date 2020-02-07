import React from "react";
// import "./homepage.styles.scss"; => replaced by styled-components!

// Components Dependencies

import Directory from '../../components/directory/directory.component';
import HomePageContainer from './homepage.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
