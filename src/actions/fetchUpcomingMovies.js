const fetchUpcomingMovies = () => dispatch => {
  dispatch({type: 'START_ADDING_MOVIES'});
  fetch('/movie/upcoming')
    .then(response => response.json())
    .then(moviesData => 
      dispatch({
        type: 'FETCH_UPCOMING_MOVIES',
        payload: moviesData
    }))
    .catch(error => console.log(error))
}

export default fetchUpcomingMovies;