import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../carousel.css'
 
class MovieCarousel extends Component {
  render() {
    return (
      <Carousel className='movie-carousel' infiniteLoop='true' autoPlay='true' >
        <div>
          <img src="https://amc-theatres-res.cloudinary.com/v1553695740/amc-cdn/production/2/movies/45800/45840/PosterDynamic/75045.jpg" />
        </div>
          <div>
            <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fresponsive_etr_gallery_desktop_portrait%2Fpublic%2Fimage%2F2017%2F10%2Fmain%2Fet.jpg%3Fitok%3DVT9OBIH6&q=85" />
          </div>
          <div>
            <img src="https://www.mydish.com/filestream.ashx?ID=22999" />
          </div>
      </Carousel>
    );
  }
};

export default MovieCarousel;