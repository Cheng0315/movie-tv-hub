import React from 'react';
import './App.css';
import NavBar from './components/navBar'
import MovieCarousel from './components/carousel'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MovieCarousel/>
    </div>
  );
}

export default App;
