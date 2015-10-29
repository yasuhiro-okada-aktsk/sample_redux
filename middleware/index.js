import {serviceSuccess} from '../actions';

export const logger = store => next => action => {
  console.log("before: %O", store.getState());
  next(action);
  console.log("after: %O", store.getState());
};

export const api = store => next => action => {
  next(action);

  if (action.api) {
    setTimeout(() => {
      next(action.success(store.getState().aService.data + store.getState().aService.data.length))
    }, 3000);
  }
};
