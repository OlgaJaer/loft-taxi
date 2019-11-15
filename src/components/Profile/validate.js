export const validate = values => {
  const errors = {};
  const requiredFields = ["cardName", "cardNumber", "expDate", "cvv"];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Это обязательное поле";
    }
  });

  if (!/(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)/i.test(values.cardName)) {
    errors.cardName = "Введите, как указано на карте";
  }
  if (values.cardNumber && values.cardNumber.replace(/\s/g, "").length !== 16) {
    errors.cardNumber = "В номере карты 16 цифр";
  }
  if (
    values.cardNumber &&
    isNaN(Number(values.cardNumber.replace(/\s/g, "")))
  ) {
    errors.cardNumber = "Может содержать только цифры";
  }
  if (values.cvv && isNaN(Number(values.cvv.replace(/\s/g, "")))) {
    errors.cvv = "Может содержать только цифры";
  }
  if (values.cvv && values.cvv.length !== 3) {
    errors.cvv = "CVV состоит из 3 цифр";
  }
  return errors;
};
