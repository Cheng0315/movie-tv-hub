import React from 'react';
import './App.css';
import NavBar from './components/navBar'
import MovieCarousel from './components/carousel'
import Gallery from './components/popular'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MovieCarousel/>
      <Gallery/>
    </div>
  );
}

export default App;
