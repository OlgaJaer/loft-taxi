import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { App } from "./App";
import { profile } from "./components/Profile/userCardData/reducer";
import { authReducer as auth } from "./components/Auth/reducer";
import { signUpReducer as signUp } from "./components/Signup/reducer";
import { loadState, saveState } from "./localStorage";
import * as serviceWorker from "./serviceWorker";
import { theme } from "loft-taxi-mui-theme";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseLine from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import { authMiddleware } from "./components/Auth/middleware";
import { signUpMiddleware } from "./components/Signup/middleware";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const persistedState = loadState();

const rootReducer = combineReducers({
  signUp,
  auth,
  profile
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(
    applyMiddleware(authMiddleware),
    applyMiddleware(signUpMiddleware)
  )
);

store.subscribe(() => {
  saveState({
    signUp: store.getState().signUp,
    auth: store.getState().auth,
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
