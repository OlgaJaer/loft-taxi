import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { Map } from "./components/Map/Map";
import { Signup } from "./components/Signup";
import { PrivateRoute } from "./PrivateRoute";

export const App = () => {
  return (
    <Switch>
      
      <PrivateRoute path="/map" component={Map} />
      <PrivateRoute path="/profile" component={Profile} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" component={Signup} />
      <Redirect to="/map" />
      {/* <Route render={()=> <h1 style={{color:'red', textAlign:'center'}}>404 not found</h1>} /> */}
    </Switch>
  );
};
