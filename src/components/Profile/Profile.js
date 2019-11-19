import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { handleProfileSubmit } from "./actions";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { MCIcon } from "loft-taxi-mui-theme";
import { renderPicker } from "./renderPicker";
import {renderField} from "..//Shared/renderField"

import { validate } from "./validate";

const cardNumber = value =>
  value
    ? value
        .replace(/\s/g, "")
        .slice(0, 16)
        .match(/.{1,4}/g)
        .filter(() => true)
        .join(" ")
    : "";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 1
  },
  message: {
    marginBottom: 30
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing()
  },
  card: {
    width: 300,
    height: 300, //* 0.63,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    position: "relative"
  }
});

export const PaymentForm = compose(
  connect(state => ({
    initialValues: state.profile
  })),
  reduxForm({
    form: "PaymentForm",
    validate,
    onSubmit: (values, dispatch) => {
      console.log(values);
      dispatch(handleProfileSubmit(values));
    }
  }),
  withStyles(styles)
)(({ classes, handleSubmit, submitSucceeded}) => {
  const [selectedDate, handleDateChange] = React.useState(new Date());

  //console.log(selectedDate);

  return submitSucceeded ? (
    <Grid container spacing={2}>
      <Grid item xs={12} align="center">
        <Typography className={classes.message}>
          Платёжные данные обновлены. Теперь вы можете заказывать такси.
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Button variant="contained" color="primary" component={Link} to="/map">
          Перейти на карту
        </Button>
      </Grid>
    </Grid>
  ) : (
    <form onSubmit={handleSubmit}>
      <Grid container alignContent="center">
        <Grid item xs={12}>
          <Grid container className={classes.root} justify="center" spacing={4}>
            <Grid item xs={6}>
              <Card elevation={3} className={classes.card}>
                <Box
                  display="flex"
                  height="100%"
                  flexDirection="column"
                  justifyContent="space-around"
                >
                  <MCIcon />
                  <Field
                    component={renderField}
                    required
                    name="cardNumber"
                    label="Номер карты"
                    placeholder="0000 0000 0000 0000"
                    maxLength="12"
                    normalize={cardNumber}
                    fullWidth
                  />
                  <Field
                    component={renderPicker}
                    clearable
                    name="expiryDate"
                    required
                    value={selectedDate}
                    label="Срок действия"
                    onChange={handleDateChange}
                  />
                </Box>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card elevation={3} className={classes.card}>
                <Box
                  display="flex"
                  height="100%"
                  flexDirection="column"
                  justifyContent="space-around"
                >
                  <Field
                    component={renderField}
                    required
                    name="cardName"
                    label="Имя владельца"
                    placeholder="USER NAME"
                    fullWidth
                  />
                  <Field
                    component={renderField}
                    required
                    name="cvv"
										label="CVV"
										fullWidth
                  />
                </Box>
              </Card>
            </Grid>
          </Grid>
          <Grid align="center">
            <Button
              variant="contained"
              color="primary"
              elevation={0}
              type="submit"
              className={classes.button}
            >
              Сохранить
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
});
