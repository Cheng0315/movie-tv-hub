const fetchPopularTvSHows = () => dispatch => {
  dispatch({type: 'START_ADDING_MOVIES'});
  fetch('/tv/popular')
    .then(response => response.json())
    .then(moviesData => 
      dispatch({
        type: 'FETCH_POPULAR_TV_SHOWS',
        payload: moviesData
    }))
    .catch(error => console.log(error))
}

export default fetchPopularTvSHows;