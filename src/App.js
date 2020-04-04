import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Main from './components/Main'
import Details from "./components/Details"
import About from "./components/About"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
 
  return (
    <Router>
    <Nav/>
    <Switch>
    <Route path="/receipe/" exact component={Main}/>
    <Route path="/receipe/about/" component={About}/>
    <Route path="/receipe/details/" component={Details}/>
    </Switch>
    </Router>
  );
}

export default App;
