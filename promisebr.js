

// function getName() {

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('mnvivek')
//         },3000)
//     })
    
// }
// function getmobile() {

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('854795834')
//         },1000)
//     })

// }
// Promise.all([getName(),getmobile()]).then((result)=>{
//     console.log(result);
// })  



// async function getuser() {

//     let name= await getName()
//     console.log(name);
//     let number=await getmobile()
//     console.log(number);
// }

// getuser()



// function getsum(a,b){

//     let sum = a+b
//     return new Promise((resolve,reject)=>{

//        setTimeout(()=>{
//         if (sum==0) {
//             reject(" zero here")
//         }else{
//             resolve(sum)
//         }
//        },3000)
//     })

// }

// function multiplication(c,d){
//     let multiple=c*d
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
       
//         if(multiple==0){
//             reject('nan')
//         }else{
//             resolve(multiple)
//         }

//        },2000)
//     })
// }

//  async function sum() {

//     let now= await getsum(0,0).catch((error)=>{
//       console.log(error);
//     })
//     console.log(now);

//     let na= await multiplication(40,0).catch((error)=>{
//         console.log(error);
//     })
//     console.log(na);
//  }
//  sum()

// getsum()
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })


//  function passingvalue(a,b){
//       let sum=a+b

//       return new Promise((resolve,reject)=>{
          
//         resolve()

//       })

//  }

function sama() {
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("sama")
        },1000)
          
    })
}

function sir() {
    
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject('sir')
        },2000)
    })
}

// Promise.all([sama(),sir()]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

Promise.race([sama(),sir()]).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})