const fetchAiringTodayTvSHows = () => dispatch => {
  dispatch({type: 'START_ADDING_MOVIES'});
  fetch('/tv/airing_today')
    .then(response => response.json())
    .then(moviesData => 
      dispatch({
        type: 'FETCH_AIRING_TODAY_TV_SHOWS',
        payload: moviesData
    }))
    .catch(error => console.log(error))
}

export default fetchAiringTodayTvSHows;