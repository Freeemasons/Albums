
import reducer from './genre'

import { LOADINGSONGLIST_REQUEST, LOADINGSONGLIST_SUCCESS } from '../actions/ActionTypes'

describe ('genre reducer', () => {   
    const requestState = {
        isLoading: true,
        dataSongList: [],
        errorMsg: null,
    }

    it(LOADINGSONGLIST_REQUEST, () => {
       const state = {
           isLoading: false,
           dataSongList: [],
           errorMsg: null,
       }

       const action = {
           type: LOADINGSONGLIST_REQUEST
       }

        expect(reducer(state, action)).toEqual(requestState);
    })

    it(LOADINGSONGLIST_REQUEST, ()=> {
        const state = {
            isLoading: false,
            dataSongList: [],
            errorMsg: null,
        }
        const action = {
            type: LOADINGSONGLIST_REQUEST
        }
        expect(reducer(state, action)).toEqual(requestState)
    })

    it(LOADINGSONGLIST_REQUEST + ' после ошибочного предыдущего запроса', () => {
        const state = {
            isLoading: false,
            dataSongList: [],
            errorMsg: 'error',
        }
        const action = {
            type: LOADINGSONGLIST_REQUEST
        }
        expect(reducer(state, action)).toEqual(requestState);
    });

    it(LOADINGSONGLIST_SUCCESS, ()=> {

        const state = {
            isLoading: true,
            dataSongList: [],
            errorMsg: null,
        }
        const action = {
            type: LOADINGSONGLIST_SUCCESS,
            payload: [1]
        }
        expect(reducer(state, action)).toEqual({
            ...state, isLoading: false, dataSongList: action.payload
        })
    })    
})