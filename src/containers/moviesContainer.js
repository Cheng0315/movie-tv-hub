
import React from 'react'
import MovieCarousel from '../components/carousel'
import PopularMovies from '../components/popularMovies'
import UpcomingMovies from '.../components/upcomingMovies'
import TopRatedMovies from './components/topRatedMovies'
import NowPlayingMovies from '../components/nowPlayingMovies'
 
class MoviesContainer extends React.Component {
  render() {
    return (
      <div>
        <MovieCarousel/>
        <NowPlayingMovies/>
        <PopularMovies/>
        <UpcomingMovies/>
        <TopRatedMovies/>
      </div>
    )
  }
}

export default MoviesContainer;