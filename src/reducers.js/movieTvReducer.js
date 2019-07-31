const initialState = {
  loadingMovies: false,
  popularMovies: [],
  nowPlayingMovies: [],
  topRatedMovies: [],
  upcomingMovies: []
}

export default function plateReducer(state = initialState, action) {
  switch(action.type){
    case 'START_ADDING_MOVIES':
      return {...state, loadingMovies: true}
    case 'FETCH_NOW_PLAYING_MOVIES':
      return {...state, loadingMovies: false, nowPlayingMovies: action.payload}
    case 'FETCH_POPULAR_MOVIES':
      return {...state, loadingMovies: false, popularMovies: action.payload}
    case 'FETCH_TOP_RATED_MOVIES':
      return {...state, loadingMovies: false, topRatedMovies: action.payload}
    case 'FETCH_UPCOMING_MOVIES':
      return {...state, loadingMovies: false, upcomingMovies: action.payload}
    default: 
      return state
  }
}