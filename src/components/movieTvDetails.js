import React from 'react'
import Gallery from './gallery'

class MovieTvDetails extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>One Punch Man</h3>
          <img src="https://amc-theatres-res.cloudinary.com/v1553695740/amc-         cdn/production/2/movies/45800/45840/PosterDynamic/75045.jpg" />
        </div>
        <div>
          Details
          <p>
          Saitama is a hero who only became a hero for fun. After three years of “special” training, though, he’s become so   strong that he’s practically invincible. In fact, he’s too strong—even his mightiest opponents are taken out with a single punch, and it turns out that being devastatingly powerful is actually kind of a bore. With his passion for being a hero lost along with his hair, yet still faced with new enemies every day, how much longer can he keep it going?
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
         <ul>
	        <li>
					 list of reviews about the movie or tv shows
		      </li>
				 </ul>
        </div>
      </div>
    )
  }
}

export default MovieTvDetails;