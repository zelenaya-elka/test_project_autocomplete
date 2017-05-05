import { assign, filter } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import {IState} from './model'

import {
  AUTO_COMPLETE,
  SET_SELECT_ITEM,
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR
} from './constants/ActionTypes';

const initialState: IState = {
  hintList: [{
    "text": "Yesterday all my troubles seemed so far away",
    "id": 0
  },
  {
    "text": "Now it looks as though they're here to stay",
    "id": 1
  },
  {
    "text": "Oh, I believe in yesterday",
    "id": 2
  },
  {
    "text": "Suddenly I'm not half the man I used to be",
    "id": 3
  },
  {
    "text": "There's a shadow hanging over me",
    "id": 4
  },
  {
    "text": "Oh, yesterday came suddenly",
    "id": 5
  }
  ],
  isTyping: false,
  isLoading: false,
  errorText: undefined,
  error: false,
  selectedItem: {
    id: -1,
    text: ""
  }
};

export default function reducer(state = initialState, action){
  switch (action.type){
    case "AUTO_COMPLETE":
      return{
        ...state,
        sortedList: action.payload,
        isTyping: true
      };
    case "SET_SELECT_ITEM":
      return {
        ...state,
        selectedItem: action.payload,
        isTyping: false
      };
    case "GET_DATA":
      return {
        ...state,
        isLoading: true,
        isTyping: true
      };
    case "GET_DATA_SUCCESS":
      return {
        ...state,
        hintList: action.payload,
        isLoading: false
      };
    case "GET_DATA_ERROR":
      return {
        ...state,
        error: action.error,
        errorText: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}