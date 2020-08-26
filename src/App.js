import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import TinderCards from './components/tindercards/TinderCards';
import SwipeButtons from './components/swipebuttons/SwipeButtons';

function App() {
  return (
    <div className='app'>
      <Header />
      <Router>
        <Switch>
          <Route path='/chat'>
            <h1>I am the chat page</h1>
          </Route>
          <Route path='/'>
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
