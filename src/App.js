import React from 'react';
import './App.css';
import NavBar from './components/navBar'
import Footer from './components/footer'
import MoviesContainer from './containers/moviesContainer'
import TvContainer from './containers/tvContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MoviesContainer/>
      <TvContainer/>
      <Footer/>
    </div>
  );
}

export default App;
