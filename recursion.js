
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

function countDown(number) {
    if (number===0) { 
      console.log("Done!");
    } else {
      console.log(number);
      countDown(number-1); 
    }
  }
  
  countDown(6); 
  