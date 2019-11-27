export const validate = values => {
  const errors = {};
  const requiredFields = ["cardName", "cardNumber", "expDate", "cvc"];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Это обязательное поле";
    }
  });

  if (!/(^[A-Z]{1}[a-z]{1,24} [A-Z]{1}[a-z]{1,24}$)/i.test(values.cardName)) {
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
  if (values.cvc && isNaN(Number(values.cvc.replace(/\s/g, "")))) {
    errors.cvc = "Может содержать только цифры";
  }
  if (values.cvc && values.cvc.length !== 3) {
    errors.cvc = "CVC состоит из 3 цифр";
  }
  return errors;
};
