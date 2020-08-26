import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import TinderCards from './components/tindercards/TinderCards';
import SwipeButtons from './components/swipebuttons/SwipeButtons';
import Chats from './components/chats/Chats';
import ChatScreen from './components/chatscreen/ChatScreen';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/chat/:person'>
            <Header backButton='/chat' />
            <ChatScreen />
          </Route>
          <Route path='/chat'>
            <Header backButton='/' />
            <Chats />
          </Route>
          <Route path='/'>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
