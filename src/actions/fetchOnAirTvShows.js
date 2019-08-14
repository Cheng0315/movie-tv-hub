const fetchOnAirTvShows = () => dispatch => {
  dispatch({type: 'START_ADDING_MOVIES'});
  fetch('/tv/on_the_air')
    .then(response => response.json())
    .then(moviesData => 
      dispatch({
        type: 'FETCH_ON_AIR_TV_SHOWS',
        payload: moviesData
    }))
    .catch(error => console.log(error))
}

export default fetchOnAirTvShows;