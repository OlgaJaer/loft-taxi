import React from "react";
import { Toolbar, Button, AppBar, Typography } from "@material-ui/core";
import { Logo } from "loft-taxi-mui-theme";
import { withStyles } from "@material-ui/core/styles";
import { AuthContext } from "../../Auth/AuthContext";

const styles = theme => ({
  appBar: {
    backgroundColor: "#ffffff"
  },
  grow: {
    flexGrow: 1
  }
});

export const Header = withStyles(styles)(({ setPage, classes }) => {
  const { isLoggedIn, logout } = React.useContext(AuthContext);
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography className={classes.grow}>
          <Logo />
        </Typography>
        <Button onClick={() => setPage("map")}>Карта</Button>
        <Button onClick={() => setPage("profile")}>Профиль</Button>
        {isLoggedIn ? (
          <Button onClick={logout}>Выйти</Button>
        ) : (
          <Button onClick={() => setPage("login")}>Войти</Button>
        )}
      </Toolbar>
    </AppBar>
  );
});
