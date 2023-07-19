
// function sum(num1,num2) {

//     console.log(num1+num2);
    
// }
// sum(100,10)


function sum(a, b, ...numbers) {
    let total = a + b;
    for (const num of numbers) {
      total += num;
    }
    return total;
  }
  
  console.log(sum(2,4,5))
  