import { createAction } from 'redux-actions'

import { createErrorMeta } from './error'

function empty() {
  return {}
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

export let resetErrorMessage = createAction(RESET_ERROR_MESSAGE);

export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE';

export let showErrorMessage = createAction(SHOW_ERROR_MESSAGE, empty, createErrorMeta);

export function showErrorMessageDelayed(message, delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(showErrorMessage(message));
    }, delay);
  };
}


export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export let showModal = createAction(SHOW_MODAL, (title, message) => ({title: title, message: message}));
export let hideModal = createAction(HIDE_MODAL);


import { createApiMeta } from './api'

export const SERVICE_GET_DATA = "SERVICE_GET_DATA";

export let serviceGetData = createAction(SERVICE_GET_DATA, empty(),
  createApiMeta("http://example.com"));
