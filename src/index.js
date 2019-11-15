import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { reducer as form } from "redux-form";
import { App } from "./App";
import { profileReducer as profile } from "./components/Profile/reducer";
import { loginReducer as loggedIn } from "./components/Login/reducer";
//import {handleActions} from "./components/Auth/reducer"
import { saveState, loadState } from "./localStorage";
import * as serviceWorker from "./serviceWorker";
import { theme } from "loft-taxi-mui-theme";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseLine from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";
//import {authMiddleware} from "./components/Auth/middleware"
import { authSuccess } from "./components/Auth/actions";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

const persistedState = loadState();

const rootReducer = combineReducers({
  loggedIn,
  profile,
  form
});

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const token = localStorage.getItem("token");
console.log(token);
if (token) {
  store.dispatch(authSuccess(token));
}

store.subscribe(() => {
  saveState({
    loggedIn: store.getState().loggedIn,
    profile: store.getState().profile
  });
});

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <CssBaseLine>
            <App />
          </CssBaseLine>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </MuiPickersUtilsProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
