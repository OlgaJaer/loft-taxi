import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

export const Header = ({ setPage }) => {
  return (
    <Toolbar>
      <Button onClick={() => setPage("profile")}>Profile</Button>
      <Button onClick={() => setPage("map")}>Map</Button>
      <Button onClick={() => setPage("login")}>Login</Button>
      <Button color="primary" onClick={() => setPage("signup")}>
        Signup
      </Button>
    </Toolbar>
  );
};
