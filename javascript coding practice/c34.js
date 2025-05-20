// [34]Capitalize the First Letter of Each Word in a Sentence in JavaScript?

const str = "hello this is a test string";

const capsEachWord = (value) => {
    console.assert(typeof value === 'string');
    let arr = value.split(' ');

    arr = arr.map((word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    return arr.join(' ')
}

const result = capsEachWord(str);

console.log(result);