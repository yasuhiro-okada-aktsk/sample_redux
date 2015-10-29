export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

// Resets the currently visible error message.
export function resetErrorMessage() {
  return {
    type: RESET_ERROR_MESSAGE
  };
}

export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE';

export function showErrorMessage(message) {
  return {
    type: SHOW_ERROR_MESSAGE,
    error: message
  }
}

export function showErrorMessageDelayed(message, delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(showErrorMessage(message));
    }, delay);
  };
}


export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export function showModal(title, message) {
  return {
    type: SHOW_MODAL,
    title: title,
    message: message
  }
}

export function hideModal() {
  return {
    type: HIDE_MODAL
  }
}

export const SERVICE_GET_DATA = "SERVICE_GET_DATA";
export const SERVICE_SUCCESS = "SERVICE_SUCCESS";

export function serviceGetData(title, message) {
  return {
    type: SERVICE_GET_DATA,
    api: "http://example.com",
    success: serviceSuccess
  }
}

export function serviceSuccess(data) {
  return {
    type: SERVICE_SUCCESS,
    data: data
  }
}
