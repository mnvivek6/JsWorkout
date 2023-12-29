
function saifu(a,b) {

  let sum = a+b
  return new Promise((resolve, reject) => {

    setTimeout(()=> {
      if (sum<0) {
        resolve('saifalikhan' ,'',sum )
      }else{
        reject("not valid")
      }
             
  
  },2000);
  })
}

async function getuser(){
 try {
  let sama = await saifu(3,4)
  console.log(`sama is ${sama}`)
 } catch (error) {
  console.log(error);
 }
 
}


getuser()

  