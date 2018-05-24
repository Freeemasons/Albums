// import * as types from '../ActionTypes'
import { LOADINGGENRES_REQUEST, LOADINGGENRES_SUCCESS, SET_GENRENAME } from '../ActionTypes'

const initialState = {
  isLoading: false,
  data: [],
  errorMsg: null,
}

export default (state = initialState, action) => {
  //{type:LOADINGGENRES_SUCCESS, payload:genres}
  switch (action.type) {

    case LOADINGGENRES_REQUEST:
      return {...state, isLoading: true}
    case LOADINGGENRES_SUCCESS:
      return {...state, data:action.payload, isLoading: false}
    case SET_GENRENAME:
      return { ...state, data: action.payload }
    default:
      return state
  }
}
