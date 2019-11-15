import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { Background } from "../Shared/Background";
import { Header } from "../Shared/Header";
import { PaymentForm } from "./Profile";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    padding: "44px 60px"
  },
  subtitle: {
    color: "rgba(0, 0, 0, 0.54)",
    marginBottom: 40
  }
});

const ProfileView = ({ classes }) => (
  <>
    <Header />
    <Background>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Профиль
            </Typography>
            <Typography align="center" className={classes.subtitle}>
              Способ оплаты
            </Typography>
            <PaymentForm />
          </Paper>
        </Grid>
      </Grid>
    </Background>
  </>
);

export const Profile = withStyles(styles)(ProfileView);
