import React from "react";
import { TextField, Button } from '@material-ui/core';

export const SignupForm = ({ setPage }) => {
  const onSubmit = e => {
    e.preventDefault();
    setPage("profile");
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <TextField variant="filled" type="email" name="email" label="email" placeholder="email" />
      </div>
      <div>
        <TextField variant="filled"
          type="text"
          name="firstname"
          label="firstname"
          placeholder="Name"
        />
      </div>
      <div>
        <TextField variant="filled"
          type="text"
          name="lastname"
          label="lastname"
          placeholder="Surname"
        />
      </div>
      <div>
        <TextField  variant="filled"
          type="password"
          name="password"
          label="Password"
          placeholder="password"
        />
      </div>
      <Button type='submit'>Signup</Button>
    </form>
  );
};
