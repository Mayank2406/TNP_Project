import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import Team from './pages/Team'

import Hall_of_fame from './pages/Hall_of_Fame';
import Login from './pages/Login';
import Contact from './pages/Countact';
import SignUp from './pages/SignUp';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/team' exact component={Team} />
          <Route path='/placements' component={Hall_of_fame} />
          <Route path='/login' component={Login} />
          <Route path='/contact' component={Contact} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
