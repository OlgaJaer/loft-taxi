const styles = theme => ({
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    padding: "44px 60px"
  },
  subtitle: {
    color: "rgba(0, 0, 0, 0.54)",
    marginBottom: 40
  },

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

export default styles;
