import { LOADINGGENRES_REQUEST, LOADINGGENRES_SUCCESS, SET_GENRENAME } from '../ActionTypes'

export function onLoadingGenreNames() {
  return {
    type: LOADINGGENRES_REQUEST,
  };
}

 export function loadGenres() {
   return function (dispatch/*getState*/) {
     dispatch(onLoadingGenreNames())
     fetch('https://5af4686d04604e0014ea734b.mockapi.io/genre-list')
       .then(response => response.json())
       .then(genres => {
         dispatch({type:LOADINGGENRES_SUCCESS, payload:genres})
       })
   }
 }

export function setGenreHeader(name) {
  return {
    type: SET_GENRENAME,
    payload: name
  }
}