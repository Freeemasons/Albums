import { combineReducers } from 'redux'
import genres from './genres'
import genre from './genre'
import header from './header'
import song from './song'

export default combineReducers({
  genre,
  genres,
  header,
  song
})
