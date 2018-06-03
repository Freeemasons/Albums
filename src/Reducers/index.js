import { combineReducers } from 'redux'
import genres from './genres'
import genre from './genre'
import header from './header'

export default combineReducers({
  genre,
  genres,
  header
})
