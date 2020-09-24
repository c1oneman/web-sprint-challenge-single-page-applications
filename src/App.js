import React, { useState, useEffect } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Home from './Home'
import Form from './Form.js'
import './App.css'
const App = () => {
  return (
    <>
      <header>
        <div class = "container">
        <div class = "title">
            <h1>Lambda Eats</h1>
        </div>
        <div class="links">
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/'>Help</Link>
            </nav>
        </div>
    </div>
    </header>

    <Switch>
        <Route path='/make-pizza'>
          <Form/>
        </Route>

        <Route path='/'>
          <Home/>
        </Route>

      </Switch>
      
    </>
  );
};
export default App;
