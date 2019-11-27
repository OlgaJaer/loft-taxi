import React from "react";
import TextField from "@material-ui/core/TextField";

export const renderField = ({
  input,
  label,
  meta: { touched, invalid, error },
  helperText,
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    fullWidth
    error={touched && invalid}
    helperText={(touched && error) || helperText}
    InputLabelProps={{
      shrink: true
    }}
    {...input}
    {...custom}
  />
);
