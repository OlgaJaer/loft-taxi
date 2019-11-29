import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { isAuthorized } from "./components/Auth/selectors";

export const PrivateRoute = withRouter(
  connect(state => ({ isAuthorized: isAuthorized(state) }))(
    ({ component: RouteComponent, isAuthorized, ...rest }) => {
      return (
        <Route
          {...rest}
          render={routeProps =>
            isAuthorized ? (
              <RouteComponent {...routeProps} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      );
    }
  )
);
