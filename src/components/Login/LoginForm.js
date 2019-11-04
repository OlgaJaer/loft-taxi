import React from "react";
import {
  TextField,
  Button,
  Paper,
  Grid,
  Typography,
  Link
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { AuthContext } from "../Auth/AuthContext";

const styles = theme => ({
  header: {
    marginBottom: 20
  },
  subheader: {
    marginBottom: 20
  },
  input: {
    marginBottom: 20
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2)
  }
});

export const LoginForm = withStyles(styles)(({ classes, setPage }) => {
  const { login } = React.useContext(AuthContext);

  const onSubmit = e => {
    e.preventDefault();
    login();
    setPage("profile");
  };

  return (
    <Paper className={classes.paper}>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              className={classes.header}
              component="h1"
              variant="h4"
              align="left"
            >
              Войти
            </Typography>
            <Typography
              className={classes.subheader}
              component="p"
              align="left"
            >
              Новый пользователь?{" "}
              <Link onClick={() => setPage("signup")}>Зарегистрируйтесь</Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="username"
              type="username"
              label="Имя пользователя"
              color="secondary"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              name="password"
              label="Пароль"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} align="right">
            <Button variant="contained" color="primary" type="submit">
              Войти
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
});
