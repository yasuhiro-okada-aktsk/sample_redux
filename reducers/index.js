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

function messageModal(state = null, action) {
  return {
    visibility: "show",
    title: "Sample Modal",
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,"
  }
}

const rootReducer = combineReducers({
  messageModal,
  errorMessage,
  router
});

export default rootReducer;
