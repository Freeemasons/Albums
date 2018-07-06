import { combineReducers } from 'redux'
import genres from './genres'
import genre from './genre'
import header from './header'
import song from './song'
import session from './session'

export default combineReducers({
  genre,
  genres,
  header,
  song,
  session
})
