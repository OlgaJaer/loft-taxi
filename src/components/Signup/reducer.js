import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { signUpRequest, signUpSuccess, signUpFailure } from "./actions";

const isLoading = handleActions(
  {
    [signUpRequest]: () => true,
    [signUpSuccess]: () => false,
    [signUpFailure]: () => false
  },
  false
);

const authError = handleActions(
  {
    [signUpRequest]: () => "",
    [signUpFailure]: (_state, action) => action.payload,
    [signUpSuccess]: () => ""
  },
  ""
);

export const signUpReducer= combineReducers({ isLoading, authError });