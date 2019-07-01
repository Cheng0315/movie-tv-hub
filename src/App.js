import React from 'react';
import './App.css';
import NavBar from './components/navBar'
import MovieCarousel from './components/carousel'
import PopularMovies from './components/popularMovies'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MovieCarousel/>
      <PopularMovies/>
    </div>
  );
}

export default App;
