import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { handleProfileSubmit } from "./userCardData";
import { getProfileData } from "./userCardData";
import { Link } from "react-router-dom";
import { MCIcon } from "loft-taxi-mui-theme";
import { renderPicker } from "./renderPicker";
import { renderField } from "..//Shared/renderField";
import styles from "./styles";
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

class Payment extends React.PureComponent {
  state = {
    isSubmit: false
  };

  handleSubmit = values => {
    const { handleProfileSubmit } = this.props;
    handleProfileSubmit(values);
    this.setState({ isSubmit: true });
  };

  render() {
    const { classes, profileData } = this.props;
    const { isSubmit } = this.state;

    return isSubmit ? (
      <Grid container spacing={2}>
        <Grid item xs={12} align="center">
          <Typography className={classes.message}>
            Платёжные данные обновлены. Теперь вы можете заказывать такси.
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/map"
          >
            Перейти на карту
          </Button>
        </Grid>
      </Grid>
    ) : (
      <Form
        onSubmit={this.handleSubmit}
        validate={validate}
        initialValues={profileData}
        render={({ handleSubmit, value }) => (
          <form onSubmit={handleSubmit}>
            <Grid container alignContent="center">
              <Grid item xs={12}>
                <Grid
                  container
                  className={classes.root}
                  justify="center"
                  spacing={4}
                >
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
                          parse={cardNumber}
                          fullWidth
                        />

                        <Field
                          component={renderPicker}
                          name="expiryDate"
                          required
                          label="Срок действия"
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
                          name="cvc"
                          label="CVC"
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
        )}
      />
    );
  }
}

export const PaymentForm = connect(
  state => ({ profileData: getProfileData(state) }),
  { handleProfileSubmit }
)(withStyles(styles)(Payment));
