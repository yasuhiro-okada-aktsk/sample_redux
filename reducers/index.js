import * as ActionTypes from '../actions';
import merge from 'lodash/object/merge';
import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';


// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, error } = action;

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null;
  }

  if (error) {
    return error;
  }

  return state;
}

const rootReducer = combineReducers({
  errorMessage,
  router
});

export default rootReducer;
