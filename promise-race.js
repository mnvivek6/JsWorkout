const p1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'p1'));
const p2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'p2'));

Promise.race([p1, p2]).then((value) => {
  console.log(value);  
});


const pormise1= new Promise((resolve, reject) =>setTimeout(() => {
  resolve('hi')
}, 2000))

const promise2 = new Promise((resolve, reject) => setTimeout(() => {
  resolve('hellloooo')
}, 3000))

Promise.race([promise2,pormise1]).then((value)=>{

  console.log(value);
})