import React from 'react'
import Gallery from './gallery'

class MovieTvDetails extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src="https://amc-theatres-res.cloudinary.com/v1553695740/amc-cdn/production/2/movies/45800/45840/PosterDynamic/75045.jpg" />
        </div>
        <div>
          Details
          <p>
            Summary about the movie/tv show
          </p>
        </div>
        <div>
          Cast
          <Gallery array={Array(7)}/>
        </div>
        <div>
          Trailers
          <Gallery array={Array(7)}/>
        </div>
        <div>
          Reviews
          <p>
            list of reviews about the movie/tv show
          </p>
        </div>
      </div>
    )
  }
}

export default MovieTvDetails;