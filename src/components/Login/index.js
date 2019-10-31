import React from "react";
import { LoginForm } from "./LoginForm";

export const Login = ({ setPage }) => {
  return (
    <>
      <h1>Login</h1>
      <LoginForm setPage={setPage} />
    </>
  );
};
