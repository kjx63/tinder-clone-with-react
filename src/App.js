import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import TinderCards from './components/tindercards/TinderCards';

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
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
