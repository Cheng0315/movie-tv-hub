import React from 'react'
import Gallery from './gallery'
 
class TopRatedMovies extends React.Component {
  render() {
    return (
      <div className='gallery'>
        <p>Upcoming Movies</p>
        <Gallery array={Array(7)}/>
      </div>
    )
  }
}

export default TopRatedMovies;