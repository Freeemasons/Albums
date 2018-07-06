import { 
        LOADINGGENRES_REQUEST, 
        LOADINGGENRES_SUCCESS, 
        SET_GENRENAME,
        LOADINGSONGLIST_REQUEST,
        LOADINGSONGLIST_SUCCESS,
        LOADINGSONGINFO_REQUEST,
        LOADINGSONGINFO_SUCCESS
       } from '../ActionTypes'

//Load genres actions

export function onLoadingGenreNames() {
  return {
    type: LOADINGGENRES_REQUEST,
  };
}

 export function loadGenres() {
   return function (dispatch/*getState*/) {
     dispatch(onLoadingGenreNames())
     return fetch('https://5af4686d04604e0014ea734b.mockapi.io/genre-list')
       .then(response => response.json())
       .then(genres => {
         dispatch({type:LOADINGGENRES_SUCCESS, payload:genres})
       })
   }
 }

 //Header changing action

export function setGenreHeader(name) {
  return {
    type: SET_GENRENAME,
    payload: name
  }
}

//songlistload

export function onLoadingSongList() {
  return {
    type: LOADINGSONGLIST_REQUEST,
  };
}

export function loadSonglist(genreName) {
  return function (dispatch/*getState*/) {
    dispatch(onLoadingSongList())
    fetch('http://5af4686d04604e0014ea734b.mockapi.io/' + genreName)
      .then(response => response.json())
      .then(genre => {
        dispatch({type: LOADINGSONGLIST_SUCCESS, payload:genre})
      })
  }
}

//songinfoload

export function onLoadingSongInfo() {
  return {
    type: LOADINGSONGINFO_REQUEST,
  };
}

export function loadSongInfo(genreName, songId) {
  return function (dispatch/*getState*/) {
    dispatch(onLoadingSongInfo())
    fetch('http://5af4686d04604e0014ea734b.mockapi.io/' + genreName + '/' + songId)
      .then(response => response.json())
      .then(song => {
        dispatch({ type: LOADINGSONGINFO_SUCCESS, payload:[song]})
      })
  }
}

