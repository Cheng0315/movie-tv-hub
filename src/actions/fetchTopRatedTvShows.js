const fetchTopRatedTvShows = () => dispatch => {
  dispatch({type: 'START_ADDING_MOVIES'});
  fetch('/tv/top_rated')
    .then(response => response.json())
    .then(moviesData => 
      dispatch({
        type: 'FETCH_TOP_RATED_TV_SHOWS',
        payload: moviesData
    }))
    .catch(error => console.log(error))
}

export default fetchTopRatedTvShows;