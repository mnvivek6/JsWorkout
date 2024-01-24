const util = require('util')

const obj = {a:1,b:{C:2}}

console.log(util.inspect(obj,{depth:null}));