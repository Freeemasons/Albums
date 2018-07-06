import { LOGIN_REQUEST, LOGIN_SUCCESS } from '../actions/ActionTypes'

const initialState = {
  token: null,
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true }
    default:
      return state
  }
}
