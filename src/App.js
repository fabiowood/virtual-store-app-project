import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Component Dependencies

import HomePage from './pages/homepage/homepage.component';

//Temporary Component, for exercise purposes only

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

//End of Temporary Component, for exercise purposes only

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
    </Switch>
    </div>
  );
}

export default App;
