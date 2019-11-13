import React from "react";
import { Redirect } from "react-router-dom";
//import { compose } from "redux";
import { connect } from "react-redux";
import { LoginForm } from "./LoginForm";
import { Background } from "../Shared/Background";
import { Grid } from "@material-ui/core";
import { Logo } from "loft-taxi-mui-theme";
//import {handleLoginSubmit} from "./actions"

const LoginView = ({ loggedIn, classes }) => {
  if (loggedIn) {
    return <Redirect to="/map" />;
  }
  return (
    <Background>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Logo white animated />
        </Grid>
        <Grid item xs={3}>
          <LoginForm />
        </Grid>
      </Grid>
    </Background>
  );
};

// const mapStateToProps = (state) => {console.log(state)}
// const mapDispatchToProps=(dispatch) => {
//   return {loggedIn: ()=> dispatch(handleLoginSubmit)}
// }
export const Login = connect(state => ({ loggedIn: state.loggedIn }))(LoginView);
//export const Login = connect(mapStateToProps, mapDispatchToProps)(Login2);