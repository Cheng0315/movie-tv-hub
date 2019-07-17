const initialState = {
  popularMovies: []
}

export default function plateReducer(state = initialState, action) {
  switch(action.type){
    case 'START_ADDING_MOVIES':
      return {...state, loadingPlates: true}
    default: 
      return state
  }
}