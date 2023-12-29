// function getName() {

//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             resolve("mnvivek")
//         },3000)
//     })
// }

// function getNumber() {

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("8281081084")
//         },2000)
//     })
    
// }

// Promise.all([getName(),getNumber()]).then((result)=>{
//     console.log(result);
// })

// async function getUser() {

//     let name=   await getName()
//     console.log(name);
//     let number= await getNumber()
//     console.log(number);
// }

// getUser()

// console.log("started ");
// console.log('ended');



function getname() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve('vivek')
        }, 2000);
})
}

function getnumber() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('193847983849')
        }, 1000);
    })
}

async function getuser() {
    
    let na = await getname()
    console.log(na);
}

getuser()



// const name=()=>{
//      new Promise((resolve, reject) => {
//         setTimeout(()=>{
//          resolve('hi')
//         },2000)
//      })
// }

// async function user (){
//   let nam = await name()
//   console.log(nam);
// }
// user()