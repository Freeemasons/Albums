import {
    LOADINGGENRES_REQUEST,
    LOADINGGENRES_SUCCESS,
    SET_GENRENAME,
    LOADINGSONGLIST_REQUEST,
    LOADINGSONGLIST_SUCCESS,
    LOADINGSONGINFO_REQUEST,
    LOADINGSONGINFO_SUCCESS
} from '../ActionTypes'

import { onLoadingGenreNames, loadGenres } from '../GenreActions'

import thunk from 'redux-thunk'

import configureMockStore from 'redux-mock-store'

import fetchMock from 'fetch-mock'


const middlewares = [thunk]

const mockStore = configureMockStore(middlewares)

describe('LOADINGGENRES_REQUEST', ()=>{
    it(LOADINGGENRES_REQUEST, () =>{
        
        const action ={
            type: LOADINGGENRES_REQUEST
        }
        expect(onLoadingGenreNames()).toEqual({ type: LOADINGGENRES_REQUEST})
    })
}) 

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('creates LOADINGGENRES_SUCCESS when fetching genres has been done' , () => {
        fetchMock
            .getOnce('https://5af4686d04604e0014ea734b.mockapi.io/genre-list', 
            {       
                headers: { 'content-type': 'application/json' },
                body: [{ "name": "Rap", "id": 1 }] 
            })

        const expectedActions = [
            {
                type: LOADINGGENRES_REQUEST
            },
            { 
                type: LOADINGGENRES_SUCCESS, payload: [{ "name": "Rap", "id": 1 }]
            }
        ];

        const store = mockStore({});

        return store.dispatch(loadGenres())
            .then(() => { // return of async actions
                expect(store.getActions()).toEqual(expectedActions)
            })
    

    })
})

