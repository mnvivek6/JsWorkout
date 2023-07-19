
// function dbconection(a,b){
//     return  new Promise((resolve,reject)=>{

//         let sum=a*b

//         setTimeout(() => {

//             if(sum==0){
//                 reject('the value is zero')
//             }else{
//                 resolve(sum)
//             }
//         }, 3000);
//     })
// }

// function db(a){
//     return  new Promise((resolve,reject)=>{
//         resolve(a)
//     })
// }


// console.log('program started');

// dbconection(10,0)
// .then((result)=>{
//     console.log(result);
//     return db(result)
// })
// .then(a=>{
//     console.log(a);
// })
// .catch((err)=>{
//     console.log(`the ERROR is : ${err}`);
// })

// console.log('program ended');






















// `define a 2 promise function`
// 'pass 2 numbers into the first promise and do multiplication calculation into the promise and reurn 
// the result, if the reult is 0 give an error '
// 'do addition calculation with the first promise result(multiplication result) and pass this result to 
// second promise '
// 'the second promise should return the result which they recieved and log the result '



// function multiplication(a, b) {

//     return new Promise((resolve, reject) => {

//         let sum = a * b

//         if (sum == 0) {
//             reject('the value is zero ')
//         } else {
//             setTimeout(() => {
//                 resolve(sum)
//             }, 3000);

//         }


//     })

// }
// function add(result) {
//     let added = result - 5
//     return new Promise((resolve, reject) => {
//         if (added == 0) {
//             reject('oops nothing here to add')
//         } else {
//             setTimeout(() => {
//                 resolve(added)
//             }, 2000);
//         }
//     })
// }


// multiplication(30, 5)
//     .then((response) => {
//         console.log('enterd 1st promise');
//         return add(response)
//     })
//     .then((response2) => {
//         console.log('enterd 2nd promise');
//         console.log(response2);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// console.log('ended');




// function multiplication(a, b) {
//     let sum = a * b
//     return new Promise((resolve, reject) => {

//         if (sum == 0) {

//             reject("ooops the value we got zero")
//         }
//         else {
//             resolve(sum)
//         }
//     })
// }
// multiplication(10, 0)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })



    function getname() {
        
        setTimeout(()=>{
            return new Promise ((resolve,reject)=>{

                resolve('mnvivek')
            })
        },3000)
    }

    function getnumber() {

        setTimeout(()=>{
            return new Promise((resolve, reject) => {
                
                resolve('48r4t8764584')
            })
        },2000)
        
    }

    function user() {

        let name=  getname()
console.log(name);
        let number = getnumber()
        console.log(number);
        
    }
    user()
// getname().then((resul)=>{
//     console.log(resul);
// }).catch((error))

    










