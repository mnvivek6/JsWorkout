// function bd(x, somthing) {
//     // setTimeout(() => {
//         somthing(x)
//     // }, 1000);

// }
// console.log('first');

// bd('middle', goingToCall)

// console.log('last');

// function goingToCall(res) {
//     console.log(res);
// }


/*

function sum(a,b,callback){

    callback(a,b)
}

function sum1(c,d){
    sum(c,d,(result)=>{
        console.log(result);
    })
}

sum1(5)
*/

// function sum (a,b,funtn){

// }





// function add(a,b) {
//     let sum = a+b

//         return new Promise ((resolve,reject)=>{
//             setTimeout(() => {

//                 if (sum==0) {
//                     reject('zero')
//                 }else{
//                     resolve(sum)
//                 }
//             }, 3000);
//         })

// }
// add(10,30).then((resl)=>{
//     console.log(resl);
// }).catch((err)=>{
// console.log(err);
// })


// function add(a,b,cd) {
// cd(a+b)
// }
// add(4,5,((result)=>{

//     console.log(result);
// }))

















//  this is a simple calll back funciton
function add(a, b, cd) {
    cd(a + b)
}
add(10, 20, ((result) => {
    console.log(result)
}))




// while we passing lot of functions ass arguments and recieve it as argument its really very hard to learn and read
// this is low readability it this concept is called call back hell 

function multiple(e, f, call, a, b, cb, q, y, saif,x,z,back) {
    setTimeout(() => {
        call(e * f)
    }, 1211);
    cb(a + b)
    saif(q - y)
    back(x-z)
}
multiple(3, 8, ((result) => {
    console.log(result);
}), 4, 5, ((res) => {
    console.log(res);
}), 1, 2, ((re) => {
    console.log(re);
}),34,45,((resul)=>{
    console.log(resul);
}))





