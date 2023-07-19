
//  function add(a,b){
//     let sum=a+b
//    return new Promise((resolve, reject) => {
      
//       setTimeout(() => {
        
//       if (sum==0) {
//          reject('zero')
//       }else{
//          resolve(sum)
//       }

//       }, 2000);
//    })
// }

// async function result() {

//    let addd=await add(50,30)
//    console.log(addd);

   
// }
// result()



 
function add(a,b,cb) {
   
   cb(a+b)
}

add(4,6,(re)=>{
console.log(re)
})