import React from "react";
import { DatePicker } from "@material-ui/pickers";

// export const renderPicker = ({
//   input,
//   label,
//   meta: { touched, invalid, error },
//   helperText,
//   ...custom
// }) => (
//   <DatePicker
//     clearable
//     required
//     views={["year", "month"]}
//     format="MM/yy"
//     {...input}
//     {...custom}
//   />
// );

export function renderPicker (props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <DatePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === "" ? null : value}
      format="MM/yyyy"
      minDate={new Date("2019-09-01")}
      maxDate={new Date("2035-06-01")}
      autoOk={true}
      variant="inline"
      views={["year", "month"]}
    />
  );
}

