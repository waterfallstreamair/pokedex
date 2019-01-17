import {
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAIL,
  SET_ITEM
} from '../constants/itemConstants'

const initialState = {
  isFetched: false,
  error: null,
  info: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEM_REQUEST:
      return {
        ...state,
        isFetched: true
      }

    case GET_ITEM_SUCCESS:
      return {
        ...state,
        isFetched: false
      }

    case GET_ITEM_FAIL:
      return {
        ...state,
        isFetched: false,
        error: action.payload
      }

    case SET_ITEM:
      return {
        ...state,
        info: action.payload
      }

    default:
      return state
  }
}
