import React from 'react';
import Todo from './components/Todo';
import Home from './components/Home'
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/app" exact component={Todo} />
    </Router>
  );
}

export default App;
