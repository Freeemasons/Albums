
import reducer from './song'

import { LOADINGSONGINFO_REQUEST, LOADINGSONGINFO_SUCCESS } from '../actions/ActionTypes' 

describe('song reducer', () => {
    const requestState = {
        isLoading: true,
        dataSongInfo: [],
        errorMsg: null,
    }
    it(LOADINGSONGINFO_REQUEST, () => {
        const state = {
            isLoading: false,
            dataSongInfo: [],
            errorMsg: null,
        }
        const action ={
            type: LOADINGSONGINFO_REQUEST
        }
        expect(reducer(state, action)).toEqual(requestState);
    });
    it(LOADINGSONGINFO_REQUEST + ' после ошибочного предыдущего запроса', () => {
        const state = {
            isLoading: false,
            dataSongInfo: [],
            errorMsg: 'error',
        }
        const action = {
            type: LOADINGSONGINFO_REQUEST
        }
        expect(reducer(state, action)).toEqual(requestState);
    });
    it(LOADINGSONGINFO_SUCCESS, () => {
        const state = {
            isLoading: true,
            dataSongInfo: [],
            errorMsg: null,
        }
        const action = {
            type: LOADINGSONGINFO_SUCCESS,
            payload: [1]
        }
        expect(reducer(state, action)).toEqual({
            ...state, isLoading: false, dataSongInfo: action.payload
        });
    });
})

