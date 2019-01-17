import {
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAIL,
  SET_ITEM
} from '../constants/itemConstants'

function setItem(data) {
  return {
    type: SET_ITEM,
    payload: data
  }
}

export function getItem(id) {
  return dispatch => {
    dispatch({
      type: GET_ITEM_REQUEST
    })

    return fetch(`https://pokeapi.co/api/v2/stat/${id}`, {
      mode: 'no-cors',
      credentials: 'include',
      headers: {
        'access-control-allow-origin': '*'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }

        throw new Error(`${response.status}: ${response.statusText}`)
      })
      .then(data => {
        dispatch({
          type: GET_ITEM_SUCCESS
        })
        console.log({ data })
        dispatch(setItem(data))
      })
      .catch(error => {
        dispatch({
          type: GET_ITEM_FAIL,
          payload: error.message
        })
      })
  }
}
