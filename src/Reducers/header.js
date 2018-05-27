import { SET_GENRENAME } from '../ActionTypes'

const initialState = {
    genreNames: '',
}

export default (state = initialState, action) => {
    //{type:LOADINGGENRES_SUCCESS, payload:genres}
    switch (action.type) {

        case SET_GENRENAME:
            return { ...state, genreNames: action.payload }
        default:
            return state
    }
}
