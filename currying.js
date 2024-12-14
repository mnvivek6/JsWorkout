
// function curryAdd(x) {
//     return function(y) {
//         return function(z) {
//             return x + y + z;
//         };
//     };
// }


// const curriedAdd = curryAdd(1)(2)(3);
// console.log(curriedAdd); 
const multiplication= (a)=>(b)=>(c)=> {
    
    return a*b*c
    
}

console.log(multiplication(2)(3)(4));
