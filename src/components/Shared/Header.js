import React from "react";
import { Toolbar, Button, AppBar, Typography } from "@material-ui/core";
import { Logo } from "loft-taxi-mui-theme";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { isAuthorized } from "../Auth/selectors";
import { logout } from "../Auth/actions";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  appBar: {
    backgroundColor: "#ffffff"
  },
  grow: {
    flexGrow: 1
  }
});

const HeaderView = props => {
  const { isAuthorized, logout, classes } = props;

  const handleLogout = () => {
    logout();
  };
  return (
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
        {isAuthorized ? (
          <Button onClick={handleLogout}>Выйти</Button>
        ) : (
          <Button component={Link} to="/login">
            Войти
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export const Header = connect(
  state => ({
    isAuthorized: isAuthorized(state)
  }),
  { logout }
)(withRouter(withStyles(styles)(HeaderView)));
