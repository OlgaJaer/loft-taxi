import React from "react";
import { SignupForm } from "./SignupForm";
import { Grid } from "@material-ui/core";
import { Logo } from "loft-taxi-mui-theme";
import { Background } from "..//Shared/Background";

export const Signup = ({ setPage }) => {
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
          <SignupForm setPage={setPage} />
        </Grid>
      </Grid>
    </Background>
  );
};
