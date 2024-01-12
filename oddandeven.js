//  for (let i = 1; i <=10;i ++) {
//          i%2!=0?console.log(`odd is ${i}`):console.log(`even is ${i}`);
         
    
//  }


//  let fiev = 5

//  const result = Math.floor((5.4))
//  console.log(result);
const obj = [{daddad:45,df:45},{adf:34,dl:98},{ddf:34,dl:56}]

let array =[]
 for (let i = 0; i < obj.length; i++) {
      array.push(...Object.values(obj[i]))
 }

 let odd =[]
 let even =[]

 for (let i = 0; i < array.length; i++) {
      if (array[i]%2==0) even.push(array[i])
      if (array[i]%3==0) odd.push(array[i])
 }
console.log(even);
console.log(odd);




