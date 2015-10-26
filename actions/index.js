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
