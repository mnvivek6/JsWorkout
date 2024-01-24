
// let n=5
// function factorial(n) {

//     if (n<=1) {
        
//         return n
//     }else{

//         n*factorial(n-1)
//     }
    
// }

// function a() {

//     console.log('hi');
    
//        a()
// }

// function countDown(number) {
//     if (number===0) { 
//       console.log("Done!");
//     } else {
//       console.log(number);
//       countDown(number-1); 
//     }
//   }
  
//   countDown(6); 
  const a = [ 1,2,3,4,5,6,7,8]

  // const result = Math.max(... a)

  // console.log(result);


  function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  // Example usage
  const result = fibonacci(5);
  console.log(result);
  