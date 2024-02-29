

let array = [1, 2, 3, 4, 2, 3, 5];
let uniqueArray = array.filter((value, index) =>{
     array.indexOf(value) === index
     console.log(array.indexOf(value));
})
    

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
