// import * as types from '../ActionTypes'
import { LOADINGSONGLIST_REQUEST, LOADINGSONGLIST_SUCCESS } from '../actions/ActionTypes'

const initialState = {
    isLoading: false,
    dataSongList: [],
    errorMsg: null,
}

export default (state = initialState, action) => {
    //{type:LOADINGGENRES_SUCCESS, payload:genres}
    switch (action.type) {

        case LOADINGSONGLIST_REQUEST:
            return { ...state, isLoading: true }
        case LOADINGSONGLIST_SUCCESS:
            return { ...state, dataSongList: action.payload, isLoading: false }
        default:
            return state
    }
}
