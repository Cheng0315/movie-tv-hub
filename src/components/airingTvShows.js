import React from 'react'
import Gallery from './gallery'
 
class AiringTvShows extends React.Component {
  render() {
    return (
      <div>
        <p>Now Playing</p>
        <Gallery array={Array(7)}/>
      </div>
    )
  }
}

export default AiringTvShows;