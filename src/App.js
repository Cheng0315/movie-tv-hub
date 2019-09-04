import React from 'react';
import './App.css';
import NavBar from './components/navBar'
import MoviesContainer from './containers/moviesContainer'
import TvContainer from './containers/tvContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MoviesContainer/>
      <TvContainer/>
    </div>
  );
}

export default App;
