const fetchLatestTvShows = () => dispatch => {
  dispatch({type: 'START_ADDING_MOVIES'});
  fetch('/tv/latest')
    .then(response => response.json())
    .then(moviesData => 
      dispatch({
        type: 'FETCH_LATEST_TV_SHOWS',
        payload: moviesData
    }))
    .catch(error => console.log(error))
}

export default fetchLatestTvShows;