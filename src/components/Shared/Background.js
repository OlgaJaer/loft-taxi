import React from "react";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = () => ({
  background: {
    backgroundImage: `url(${"../../assets/images/bg.jpg"})`,
    backgroundSize: "cover"
  }
});

export const Background = withStyles(styles)(({ children, classes }) => {
  return <Paper className={classes.background}>{children}</Paper>;
});
