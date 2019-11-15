// import { handleActions } from "redux-actions";

// import * as actions from "./actions";

// export default handleActions(
//   {
//     [actions.authRequest](state) {
//       return {
//         ...state,
//         isLoading: true,
//         token: null,
//         error: null,
//         isAuthenticated: false
//       };
//     },
//     [actions.authSuccess](state, { payload }) {
//       if (localStorage.getItem("token") !== payload) {
//         localStorage.setItem("token", payload);
//       }

//       return {
//         ...state,
//         isLoading: false,
//         token: payload,
//         error: null,
//         isAuthenticated: true
//       };
//     },
//     [actions.authFailure](state, { payload }) {
//       return {
//         ...state,
//         isLoading: false,
//         token: null,
//         error: payload,
//         isAuthenticated: false
//       };
//     },
//     [actions.logout](state) {
//       localStorage.removeItem("token");

//       return {
//         ...state,
//         isLoading: false,
//         token: null,
//         error: null,
//         isAuthenticated: false
//       };
//     }
//   },
//   { isLoading: false, token: null, error: null, isAuthenticated: false }
// );
