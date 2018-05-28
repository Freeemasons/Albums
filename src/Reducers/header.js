import { SET_GENRENAME } from '../actions/ActionTypes'

const initialState = ''

export default (state = initialState, action) => {
    //{type:LOADINGGENRES_SUCCESS, payload:genres}
    switch (action.type) {

        case SET_GENRENAME:
            return action.payload
        default:
            return state
    }
}
