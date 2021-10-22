import React from 'react';
import {Switch, Route } from 'react-router';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop';
import './sass/index.scss'



function App() {
  return (
    <Switch>
      <div >
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
      </div>
    </Switch>
  );
}

export default App;
