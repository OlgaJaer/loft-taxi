import axios from "axios";

import { authRequest, authSuccess, authFailure } from "./actions";

export const authMiddleware = store => next => action => {
  if (action.type === authRequest.toString()) {
    const { payload } = action;

    axios
      .post("https://loft-taxi.glitch.me/auth", payload)
      .then(({ data }) => {
        if (!data.success) {
          throw new Error(data.error);
        }
        
        //const {token} = data
        store.dispatch(authSuccess(data));
      })
      .catch(({ message, error }) => {
        store.dispatch(authFailure(error || message));
      });
  }

  return next(action);
};
