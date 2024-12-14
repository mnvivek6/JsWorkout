// setTimeout(function(){
//   console.log("hi am vivek");
// },5000)


let a=10
function x(y,b){

console.log("x");
y()
console.log(b);

}

x(function () {
     console.log("y");
},a)



// function su(y) {
    
//     console.log('su');
// y()
// }

// su(function () {
//     console.log('hail');
// })