import { handleProfileSubmit } from "./actions";
import { handleActions } from "redux-actions";

export const profile = handleActions(
  {
    [handleProfileSubmit]: (_state, action) => action.payload
  },
  null
);

