import React from 'react';
import './App.css';
import NavBar from './components/navBar'
import Footer from './components/footer'
import MoviesContainer from './containers/moviesContainer'
import TvContainer from './containers/tvContainer'
import MovieCarousel from './components/carousel'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MovieCarousel/>
      <MoviesContainer/>
      <TvContainer/>
      <Footer/>
    </div>
  );
}

export default App;
