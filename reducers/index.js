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

const messageModalInitial = {
  visibility: "hide"
};

function messageModal(state = messageModalInitial, action) {
  const { type, title, message } = action;

  switch (type) {
    case ActionTypes.SHOW_MODAL:
      return {
        visibility: "show",
        title: title,
        message: message
      };

    case ActionTypes.HIDE_MODAL:
      return {
        visibility: "hide"
      };

    default:
      return state;
  }
}

const aServiceInitial = {
  isFetching: false,
  data: ""
};

function aService(state = aServiceInitial, action) {
  const { type, data } = action;

  switch (type) {
    case ActionTypes.SERVICE_GET_DATA:
      return Object.assign({},
        state,
        {
          isFetching: true
        });

    case ActionTypes.SERVICE_SUCCESS:
      return {
        isFetching: false,
        data: data
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  messageModal,
  aService,
  errorMessage,
  router
});

export default rootReducer;
