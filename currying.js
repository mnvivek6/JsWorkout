// Curried version
function curryAdd(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        };
    };
}

// Using the curried function
const curriedAdd = curryAdd(1)(2)(3);
console.log(curriedAdd); w