import React from "react";
import { DatePicker } from "@material-ui/pickers";

export const renderPicker = ({
  input,
  label,
  meta: { touched, invalid, error },
  helperText,
  ...custom
}) => (
  <DatePicker
    clearable
    required
    views={["year", "month"]}
    format="MM/yy"
    {...input}
    {...custom}
  />
);
