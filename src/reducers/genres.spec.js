import reducer from './genres'

import { LOADINGGENRES_REQUEST, LOADINGGENRES_SUCCESS } from '../actions/ActionTypes'

describe('genres reducer tests', () => {

    const genresRequestState = {
        isLoading: true,
        data: [],
        errorMsg: null,
    }

    it(LOADINGGENRES_REQUEST, ()=>{

        const state = {
            isLoading: false,
            data: [],
            errorMsg: null,
        }

        const action = {
            type: LOADINGGENRES_REQUEST
        }

        expect(reducer(state, action)).toEqual(genresRequestState)

    })

    it(LOADINGGENRES_REQUEST, () => {
        const state = {
            isLoading: false,
            data: [],
            errorMsg: null,
        }

        const action = {
            type: LOADINGGENRES_REQUEST
        }

        expect(reducer(state, action)).toEqual(genresRequestState)
    })

    it(LOADINGGENRES_REQUEST + ' после ошибочного предыдущего запроса', () => {
        const state = {
            isLoading: false,
            data: [],
            errorMsg: 'error',
        }
        const action = {
            type: LOADINGGENRES_REQUEST
        }
        expect(reducer(state, action)).toEqual(genresRequestState);
    });

    

})