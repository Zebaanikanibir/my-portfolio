import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import Projects from './Components/Projects/Projects';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './Components/About/About';
import Wedding from './Components/Wedding/Wedding';
import BDShop from './Components/BDShop/BDShop';
import Journey from './Components/Journey/Journey'
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/wedding">
            <Wedding />
          </Route>
          <Route path="/shop">
            <BDShop />
          </Route>
          <Route path="/journey">
            <Journey />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
