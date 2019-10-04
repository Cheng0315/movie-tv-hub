import React from 'react'
import Gallery from './gallery'
import '../css/gallery.css';
 
class PopularTvShows extends React.Component {
  render() {
    return (
      <div className='gallery'>
        <p>Now Playing</p>
        <Gallery array={Array(7)}/>
      </div>
    )
  }
}

export default PopularTvShows;