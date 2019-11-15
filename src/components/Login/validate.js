const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
    errors.username = "Неверный логин";
  }
  if (!values.password) {
    errors.password = "Неправильный пароль";
  }
  return errors;
};

export default validate;
