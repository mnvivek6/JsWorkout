const { setDefaultOptions } = require("readline-sync");


// console.log('started');

// setImmediate(() => {
//     console.log("This runs after I/O events and other immediate actions.");
//   });

//   console.log("ended");

//   setTimeout(()=>{

//     console.log('aftere the time out');
//   },3000)

 

  console.log('Hello => number 1');
  setImmediate(() => {
    console.log('Running before the timeout => number 3');
  });
  setTimeout(() => {
    console.log('The timeout running last => number 4');
  }, 0);
  process.nextTick(() => {
    console.log('Running at next tick => number 2');
  });