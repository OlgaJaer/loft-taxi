import React from "react";
import { LoginForm } from "./LoginForm";
import { Background } from "../Shared/Background";
import { Grid } from "@material-ui/core";
import { Logo } from "loft-taxi-mui-theme";

export const Login = ({ setPage }) => {
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
          <Logo animated/>
        </Grid>
        <Grid item xs={3}>
          <LoginForm setPage={setPage} />
        </Grid>
      </Grid>
    </Background>
  );
};
