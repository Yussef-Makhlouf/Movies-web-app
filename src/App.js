import './App.css';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Movies from './components/Movies';
import TVShows from './components/TVShows';
import PageNotFound from './components/PageNotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import NavigationBar from './components/Navbar';

import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
 <Router>
 <NavigationBar />
      <div className="container mt-4">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/tvshows" component={TVShows} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
      
    </Router>
  
    </div>
  );
}

export default App;
