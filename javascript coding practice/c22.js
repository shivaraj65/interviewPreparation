// [22]Write a Program to convert Celsius to Fahrenheit in JavaScript?

const fahrenheitToCelcius = (number) => {
    let celciusValue = (number -32) * 5/9;
    return `${celciusValue}`
}

const result = fahrenheitToCelcius(113);
console.log(Number(result).toFixed(2)+'°C')