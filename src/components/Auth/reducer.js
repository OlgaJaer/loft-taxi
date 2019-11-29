import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { authRequest, authSuccess, authFailure, logout } from "./actions";

const isAuthorized = handleActions(
  {
    [authSuccess]: () => true,
    [logout]: () => false
  },
  false
);

const isLoading = handleActions(
  {
    [authRequest]: () => true,
    [authSuccess]: () => false,
    [authFailure]: () => false
  },
  false
);

const authError = handleActions(
  {
    [authRequest]: () => "",
    [authFailure]: (_state, action) => action.payload,
    [authSuccess]: () => ""
  },
  ""
);

export const authReducer= combineReducers({ isAuthorized, isLoading, authError });