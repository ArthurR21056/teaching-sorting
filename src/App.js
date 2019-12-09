import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component'
import BubbleSortPage from './pages/bubble-sort/bubble-sort.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={BubbleSortPage}/>
      </Switch>
    </div>
  );
}

export default App;


