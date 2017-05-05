import { createAction, Action } from 'redux-actions';
import {filter, mapKeys} from 'lodash';
import load from './services/api';
import {IItem} from './model';

import {
  AUTO_COMPLETE,
  SET_SELECT_ITEM,
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR
} from './constants/ActionTypes';

/**
 * Обновление информации о записи, выбранной в выпадающем списке
 * @param object - выбранная запись. 
 */
const updateSelectItem = (object: IItem) => {
  return {
    type: SET_SELECT_ITEM,
    payload: object
  }
};

const autoComplete = (value, dispatch) => {
    dispatch({
      type: GET_DATA
    })
    let result = load(value)
    .then(data => {
      setTimeout(() => {
        dispatch({
          type: GET_DATA_SUCCESS,
          payload: data
        })
      }, 1000)
    })
    .catch(err => {
      dispatch({
        type: GET_DATA_ERROR,
        payload: err,
        error: true
      })
    });
  }

export {
  autoComplete,
  updateSelectItem
}

