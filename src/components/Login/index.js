import React from "react";
import { Redirect } from "react-router-dom";
import { Button, Paper, Grid, Typography, Link } from "@material-ui/core";
//import { compose } from "redux";
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
    authRequest({ username: values.username, password: values.password });
  };

  render() {
    const { classes, isAuthorized, isLoading } = this.props;

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
                          name="username"
                          type="username"
                          label="Имя пользователя"
                          color="secondary"
                          fullWidth
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
                          disabled={isLoading}
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

export const Login = withRouter(
  connect(state => ({
    isAuthorized: isAuthorized(state),
    authError: getErrors(state),
    isLoading: isLoading(state)
  })),
  { authRequest }
)(withStyles(styles)(LoginView));
