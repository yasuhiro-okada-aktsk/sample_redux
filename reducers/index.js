import * as ActionTypes from '../actions';
import merge from 'lodash/object/merge';
import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions'

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, meta } = action;

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null;
  }

  if (meta && meta.error && meta.error.message) {
    return meta.error.message;
  }

  return state;
}

const messageModalInitial = {
  visibility: "hide"
};

const messageModal = handleActions({
  SHOW_MODAL: (state, action) => ({
    visibility: "show",
    title: action.payload.title,
    message: action.payload.message
  }),

  HIDE_MODAL: (state, action) => ({
    visibility: "hide"
  })
}, messageModalInitial);

const aServiceInitial = {
  isFetching: false,
  data: ""
};

const aService = handleActions({
  SERVICE_GET_DATA: (state, action) => ({
    isFetching: action.meta.api,
    data: action.payload ? action.payload : state.data
  })
}, aServiceInitial);

const rootReducer = combineReducers({
  messageModal,
  aService,
  errorMessage,
  router
});

export default rootReducer;
