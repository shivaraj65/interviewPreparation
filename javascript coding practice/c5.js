// [5]Write a Program to use a callback function?

const callbackFunc = (name)=>{
    return(`hello ${name}`)
}

const mainFunc = (number, callback) => {
    return(`${callback('shivaraj')}, your favourite number is ${number} `)
}

const result = mainFunc(7,callbackFunc);
console.log(result)