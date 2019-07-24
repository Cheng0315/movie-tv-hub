const fetchNowPlayingMovies = () => dispatch => {
  dispatch({type: 'START_ADDING_MOVIES'});
  fetch('/movie/now_playing')
    .then(response => response.json())
    .then(moviesData => 
      dispatch({
        type: 'FETCH_NOW_PLAYING_MOVIES',
        payload: moviesData
    }))
    .catch(error => console.log(error))
}

export default fetchNowPlayingMovies;