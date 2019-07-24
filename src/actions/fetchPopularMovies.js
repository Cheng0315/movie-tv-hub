const fetchPopularMovies = () => dispatch => {
  dispatch({type: 'START_ADDING_MOVIES'});
  fetch('/movie/popular')
    .then(response => response.json())
    .then(moviesData => 
      dispatch({
        type: 'FETCH_POPULAR_MOVIES',
        payload: moviesData
    }))
    .catch(error => console.log(error))
}

export default fetchPopularMovies;