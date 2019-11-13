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
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { withRouter } from "react-router-dom";
import { handleLoginSubmit } from "../Login/actions"
import {Link as RouterLink} from 'react-router-dom'

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

const renderField = ({
  input,
  label,
  meta: { touched, invalid, error },
  helperText,
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={(touched && error) || helperText}
    {...input}
    {...custom}
  />
);

export const SignupForm = compose(
  withRouter,
  connect(state => ({ loggedIn: state.loggedIn })),
  reduxForm({
    form: "loginForm",
    onSubmit: (values, dispatch) => dispatch(handleLoginSubmit())
  }),
  withStyles(styles)
)(({ classes, handleSubmit }) => {

  return (
    <Paper className={classes.paper}>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              className={classes.header}
              component="h1"
              variant="h4"
              align="left"
            >
              Регистрация
            </Typography>
            <Typography
              className={classes.subheader}
              component="p"
              align="left"
            >
              Уже зарегистрированы?{" "}
              <Link component={RouterLink} to="/login" >Войти</Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Field
              className={classes.input}
              component={renderField}
              type="email"
              name="email"
              label="Адрес электронной почты"
              color="secondary"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              className={classes.input}
              component={renderField}
              type="text"
              name="firstname"
              label="Имя"
              color="secondary"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              className={classes.input}
              component={renderField}
              type="text"
              name="lastname"
              label="Фамилия"
              color="secondary"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              className={classes.input}
              component={renderField}
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
