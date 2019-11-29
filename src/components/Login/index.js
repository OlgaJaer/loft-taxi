import React from "react";
import { Redirect } from "react-router-dom";
import { Button, Paper, Grid, Typography, Link, Box } from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { Background } from "../Shared/Background";
import { Form, Field } from "react-final-form";
import { Link as RouterLink } from "react-router-dom";
import { renderField } from "..//Shared/renderField";
import { Logo } from "loft-taxi-mui-theme";
import { isAuthorized, getErrors, isLoading } from "../Auth/selectors";
import { authRequest } from "../Auth/actions";
import validate from "./validate";
import styles from "./styles";

class LoginView extends React.PureComponent {
  handleSubmit = values => {
    const { authRequest } = this.props;
    authRequest({ email: values.email, password: values.password });
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
                          Войти
                        </Typography>
                        <Typography
                          className={classes.subheader}
                          component="p"
                          align="left"
                        >
                          Новый пользователь?{" "}
                          <Link component={RouterLink} to="/signup">
                            Зарегистрируйтесь
                          </Link>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          className={classes.input}
                          component={renderField}
                          name="email"
                          type="email"
                          label="Email"
                          color="secondary"
                          fullWidth
                        />
                        {authError && (
                          <Box mt={2}>
                            <Typography color="error" variant="body2">
                              {authError}
                            </Typography>
                          </Box>
                        )}
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

export const Login = connect(
  state => ({
    isAuthorized: isAuthorized(state),
    authError: getErrors(state),
    isLoading: isLoading(state)
  }),
  { authRequest }
)(withRouter(withStyles(styles)(LoginView)));
