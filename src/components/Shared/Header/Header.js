import React from "react";
import { Toolbar, Button, AppBar, Typography } from "@material-ui/core";
import { Logo } from "loft-taxi-mui-theme";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  appBar: {
    backgroundColor: "#ffffff"
  },
  grow: {
    flexGrow: 1
  }
});

export const Header = withStyles(styles) (({ setPage, classes }) => {
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography className={classes.grow}>
          <Logo />
        </Typography>
        <Button onClick={() => setPage("profile")}>Profile</Button>
        <Button onClick={() => setPage("map")}>Map</Button>
        <Button onClick={() => setPage("login")}>Login</Button>
        <Button onClick={() => setPage("signup")}>
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
});
