export const logger = store => next => action => {
  console.log("before: %O", store.getState());
  next(action);
  console.log("after: %O", store.getState());
};

export const api = store => next => action => {
  next(action);

  const { meta } = action;
  if (meta && meta.api) {
    setTimeout(() => {
      next(
        Object.assign(action, {
            payload: store.getState().aService.data + store.getState().aService.data.length,
            meta: {
              api: undefined
            }
          }
        ))
    }, 3000);
  }
};
