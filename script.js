const maximax = (values) => {
  let max = values.reduce((a, b) => {
    return Math.max(a, b);
  });
  return max;
};

const maximin = (values) => {
  let min = values.reduce((a, b) => {
    return Math.min(a, b);
  });
  return min;
};

const laplace = (values) => {
  return (values.reduce((a, b) => +a + +b) / values.length).toFixed(2);
};

const getValues = (value) => {
  let newArray = value.map((element) => {
    return element.value;
  });
  return newArray;
};

const setFieldValues = (field, values) => {
  const fields = [...document.getElementsByClassName(field)];

  for (i = 0; i < fields.length; i++) {
    fields[i].value = values[i];
  }
};

const submitButton = document.getElementById("submitButton");

const calculate = (field, calculateCallback, ...productValues) => {
  let values = [];
  productValues.forEach((element) => {
    values.push(calculateCallback(element));
  });
  setFieldValues(field, values);
};

submitButton.addEventListener("click", () => {
  const positiveProductsValues = getValues([
    ...document.querySelectorAll(".positive-product"),
  ]);
  const neutralProductsValues = getValues([
    ...document.querySelectorAll(".neutral-product"),
  ]);
  const negativeProductsValues = getValues([
    ...document.querySelectorAll(".negative-product"),
  ]);

  const firstProducts = getValues([...document.querySelectorAll(".first")]);
  const secondProducts = getValues([...document.querySelectorAll(".second")]);
  const thirdProducts = getValues([...document.querySelectorAll(".third")]);

  calculate("minimax", maximax, firstProducts, secondProducts, thirdProducts);
  calculate(
    "maximax",
    maximax,
    positiveProductsValues,
    neutralProductsValues,
    negativeProductsValues
  );
  calculate(
    "maximin",
    maximin,
    positiveProductsValues,
    neutralProductsValues,
    negativeProductsValues
  );
  calculate("laplace", laplace, firstProducts, secondProducts, thirdProducts);
});
