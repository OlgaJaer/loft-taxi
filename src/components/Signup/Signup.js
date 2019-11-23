import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { Logo } from "loft-taxi-mui-theme";
import { Background } from "../Shared/Background";
import { Button, Paper, Grid, Typography, Link, Box } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { signUpRequest } from "./actions";
import { Link as RouterLink } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { isAuthorized, getErrors, isLoading } from "./selectors";
import styles from "./styles";
import validate from "../Shared/validate";
import { renderField } from "../Shared/renderField";

class SignupView extends React.PureComponent {
  handleSubmit = values => {
    const { signUpRequest } = this.props;
    signUpRequest({
      email: values.email,
      password: values.password,
      name: values.name,
      surname: values.surname
    });
  };
  render() {
    const { classes, isAuthorized, authError } = this.props;

    return isAuthorized ? (
      <Redirect to="/map" />
    ) : (
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
            <Paper className={classes.paper}>
              <Form
                onSubmit={this.handleSubmit} 
                validate={validate}
                render={({ handleSubmit, values }) => (
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
                          <Link component={RouterLink} to="/login">
                            Войти
                          </Link>
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
                        {authError && (
                          <Box mt={2}>
                            <Typography color="error" variant="body2">
                              {authError}
                            </Typography>
                          </Box>
                        )}
                      </Grid>
                      <Grid item xs={6}>
                        <Field
                          className={classes.input}
                          component={renderField}
                          type="text"
                          name="name"
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
                          name="surname"
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
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                        >
                          Войти
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                )}
              />
            </Paper>
          </Grid>
        </Grid>
      </Background>
    );
  }
}

export const Signup = connect(
  state => ({
    isAuthorized: isAuthorized(state),
    authError: getErrors(state),
    isLoading: isLoading(state)
  }),
  { signUpRequest }
)(withRouter(withStyles(styles)(SignupView)));
