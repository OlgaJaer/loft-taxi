import React from "react";
import { SignupForm } from "./SignupForm";

export const Signup = ({ setPage }) => {
  return (
    <>
      <h1>Signup</h1>
      <SignupForm setPage={setPage} />
    </>
  );
};
