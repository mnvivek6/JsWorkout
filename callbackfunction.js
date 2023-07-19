// setTimeout(function(){
//   console.log("hi am vivek");
// },5000)

function x(y){

console.log("x");
y()
}

x(function () {
     
    console.log("y");
})