// import * as types from '../ActionTypes'
import { LOADINGSONGINFO_REQUEST, LOADINGSONGINFO_SUCCESS } from '../actions/ActionTypes'

const initialState = {
    isLoading: false,
    dataSongInfo: [],
    errorMsg: null,
}

export default (state = initialState, action) => {
    //{type:LOADINGGENRES_SUCCESS, payload:genres}
    switch (action.type) {

        case LOADINGSONGINFO_REQUEST:
            return { ...state, isLoading: true, errorMsg: null}
        case LOADINGSONGINFO_SUCCESS:
            return { ...state, dataSongInfo: action.payload, isLoading: false }
        default:
            return state
    }
}