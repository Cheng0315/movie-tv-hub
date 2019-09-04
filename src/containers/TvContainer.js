import React from 'react'
import LatestTvShows from '../components/latestTvShows'
import OnTheAirTvShows from '../components/onTheAIrTvShows'
import PopularTvShows from '../components/popularTvShows'
import TopRatedTvShows from '../components/topRatedTvShows'
 
class TvContainer extends React.Component {
  render() {
    return (
      <div>
        <PopularTvShows/>
        <TopRatedTvShows/>
        <OnTheAirTvShows/>
        <LatestTvShows/>
      </div>
    )
  }
}

export default TvContainer;