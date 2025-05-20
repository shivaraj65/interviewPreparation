// [43]Use JSON to parse and stringify data in JavaScript?

const input = {
    name:"shivaraj",
    age:25
}

const stringifiedData = JSON.stringify(input);
console.log("stringified data - ", stringifiedData);

const parsedData = JSON.parse(stringifiedData);
console.log("parsed data - ", parsedData);