import React from 'react'
import Gallery from './gallery'
 
class PopularMovies extends React.Component {
  render() {
    return (
      <div className='gallery'>
        <p>Popular</p>
        <Gallery array={Array(7)}/>
      </div>
    )
  }
}

export default PopularMovies;