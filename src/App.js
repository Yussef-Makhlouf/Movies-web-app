
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './components/Home';
import TVShows from './components/TVShows';
import About from './components/About';
import Contact from './components/Contact';
import Details from './components/Details';
import FavoriteMovies from './components/FavoriteMovies';

function App() {
  return (
    <div>
    <Router>
      <NavigationBar />
      <div className="container mt-4">
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/movies" exact component={Movies} /> */}
          <Route path="/details/:id" component={Details} />
          <Route path="/tvshows" component={TVShows} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/favorites" component={FavoriteMovies} />
        </Switch>
      </div>

    </Router>
    </div>
  );

}

export default App;
