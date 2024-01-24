const util = require('util');

console.log(util.isPrimitive(42)); // Outputs: true
console.log(util.isPrimitive({})); // Outputs: false
