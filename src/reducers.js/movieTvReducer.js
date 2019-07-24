const initialState = {
  popularMovies: [],
  nowPlayingMovies: [],
  topRatedMovies: [],
  upcomingMovies: []
}

export default function plateReducer(state = initialState, action) {
  switch(action.type){
    case 'START_ADDING_MOVIES':
      return {...state, loadingMovies: true}
    default: 
      return state
  }
}