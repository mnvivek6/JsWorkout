// const myObject = { a: 1, b: 2, c: 3 };
// const keys = Object.values(myObject);
// console.log(keys); 


const myObject = { a: 1, b: 2, c: 3 };
const entries = Object.entries(myObject);
console.log(entries); 

const freeze = Object.freeze(myObject)