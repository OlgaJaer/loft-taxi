import React from "react";
import { Toolbar, Button, AppBar, Typography } from "@material-ui/core";
import { Logo } from "loft-taxi-mui-theme";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { handleUnauthorize } from "../Login/actions";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  appBar: {
    backgroundColor: "#ffffff"
  },
  grow: {
    flexGrow: 1
  }
});

export const Header = compose(
  withRouter,
  connect(
    state => ({ loggedIn: state.loggedIn }),
    { unauthorize: handleUnauthorize }
  ),
  withStyles(styles)
)(({ loggedIn, unauthorize, classes }) => (
  <AppBar className={classes.appBar} position="static">
    <Toolbar>
      <Typography className={classes.grow}>
        <Logo />
      </Typography>
      <Button component={Link} to="/map">
        Карта
      </Button>
      <Button component={Link} to="/profile">
        Профиль
      </Button>
      {loggedIn ? (
        <Button onClick={unauthorize}>Выйти</Button>
      ) : (
        <Button component={Link} to="/login">
          Войти
        </Button>
      )}
    </Toolbar>
  </AppBar>
));
