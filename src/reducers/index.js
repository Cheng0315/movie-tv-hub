import {combineReducers} from 'redux'
import movieTvReducer from './movieTvReducer'

export default combineReducers ({
  movieAndTv: movieTvReducer
})