// [23]Write a Program to convert Fahrenheit to Celsius in JavaScript?

const celciusToFahrenheit = (number) => {
    let value = (number * (9/5))+32;
    return value;
}

const result = celciusToFahrenheit(45);
console.log(Number(result).toFixed(2)+"°F")