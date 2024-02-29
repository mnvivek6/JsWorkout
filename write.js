const { log } = require('console')
const fs = require('fs')


let result = ''
 fs.readFile('teext.txt','utf-8',(err,data)=>{
  if (err) {
    console.log(err);
  }else{
    result = data
    let str =''
for (let i = 0; i < result.length; i++) {
   
    if (result[i]%2==0) {
      str += result[i].toString()
    }

    
}

fs.writeFileSync('text.txt',str)
    
  }
})


   

let str =''
for (let i = 0; i < result.length; i++) {
   
    if (result[i]%2==0) {
      str += result[i].toString()
    }

    
}

fs.writeFileSync('text.txt',str)

// let dateString = "2024-02-19";
// console.log(dateString);
// let dateObject = new Date(dateString);
// console.log(dateObject);

// let customString = "apple,banana,orange";
// let fruitsArray = customString.split(",");

// console.log(fruitsArray);
