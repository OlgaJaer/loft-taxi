import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { reducer as form } from "redux-form";
import {App} from "./App";
import { profileReducer as profile } from "./components/Profile/reducer";
import { loginReducer as loggedIn } from "./components/Login/reducer";
import { saveState, loadState } from "./localStorage";
import * as serviceWorker from "./serviceWorker";
import { theme } from "loft-taxi-mui-theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";

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

store.subscribe(() => {
  saveState({
    loggedIn: store.getState().loggedIn,
    profile: store.getState().profile
  });
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
