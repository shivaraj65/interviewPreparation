// [27]Find the Intersection of Two Arrays in JavaScript?

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 3, 4, 5, 6];

let intercestionElem = [];

arr1.map((elem)=>{
    if(arr2.includes(elem)) intercestionElem.push(elem)
})

console.log(intercestionElem);