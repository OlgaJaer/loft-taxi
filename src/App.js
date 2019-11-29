import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { Map } from "./components/Map/Map";
import { Signup } from "./components/Signup/Signup";
import { PrivateRoute } from "./PrivateRoute";

export const App = () => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <PrivateRoute path="/map" component={Map} />
      <PrivateRoute path="/profile" component={Profile} />
      <Route path="/signup" component={Signup} />
      <Redirect exact from="/" to="/login" />
      {/* <Route render={()=> <h1 style={{color:'red', textAlign:'center'}}>404 not found</h1>} /> */}
    </Switch>
  );
};
