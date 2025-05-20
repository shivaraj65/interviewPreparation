// [18]Write a Program to find factorial of a number?

const factorialFinder = (number) => {
  let value = 1;

  for (let i = 1; i <= number; i++) {
    value = value * i;
  }

  return value;
};

const result = factorialFinder(7);
console.log(result);
