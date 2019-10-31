import React from "react";
import { TextField, Button } from '@material-ui/core';


export const LoginForm = ({ setPage }) => {
  const onSubmit = e => {
    e.preventDefault();
    setPage("profile");
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <TextField variant="filled" type="email" name="email" label="Email" placeholder="email" />
      </div>
      <div>
        <TextField variant="filled"
          type="password"
          name="password"
          label="Password"
          placeholder="password"
        />
      </div>
      <Button >Login</Button>
    </form>
  );
};
