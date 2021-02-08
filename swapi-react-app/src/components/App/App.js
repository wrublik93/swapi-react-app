import React from 'react';

import AppHeader from '../AppHeader';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';

import './App.css';

const App = () => {
  return (
    <div>
      <AppHeader />
      <RandomPlanet />
      <div>
        <div>
          <ItemList />
        </div>
        <div>
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
