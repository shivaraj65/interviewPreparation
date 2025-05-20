// [16]Write a Program to check if a number is prime or not?

let number = 21;

const isPrime = (num) => {
  for (i = 2; i < Math.round(num / 2); i++) {
    if (number % i === 0) {
      return "Not PRIME";
    }
  }
  return "PRIME";
};

const result = isPrime(number);
console.log(result);
