import axios from 'axios'
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

    return axios
      .get(`https://pokeapi.co/api/v2/stat/${id}`)
      .then(response => {
        dispatch({
          type: GET_ITEM_SUCCESS
        })
        const { data } = response
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
