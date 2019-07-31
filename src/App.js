import React from 'react';
import './App.css';
import NavBar from './components/navBar'
import MovieCarousel from './components/carousel'
import PopularMovies from './components/popularMovies'
import UpcomingMovies from './components/upcomingMovies'
import TopRatedMovies from './components/topRatedMovies'
import NowPlayingMovies from './components/nowPlayingMovies'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MovieCarousel/>
      <NowPlayingMovies/>
      <PopularMovies/>
      <UpcomingMovies/>
      <TopRatedMovies/>
    </div>
  );
}

export default App;
