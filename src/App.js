import React from 'react';
import {Switch, Route } from 'react-router';

import HomePage from './pages/homepage/homepage.component';
import './sass/index.scss'

const HatsPage = () =>(
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <Switch>
      <div >
        <Route exact path='/' component={HomePage}/>
        <Route  path='/hats' component={HatsPage}/>
      </div>
    </Switch>
  );
}

export default App;
