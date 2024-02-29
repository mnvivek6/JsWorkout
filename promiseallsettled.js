

// const promises = [
//     Promise.resolve('suc'),
//     Promise.reject('Error 1'),
//     Promise.resolve('Success 2'),
//     Promise.reject('Error 2')
//   ];
  
//   Promise.all(promises)
//     .then(results => {
//       console.log('Results:', results);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
  

const promise1 = new Promise((resolve, reject) => {
  setTimeout(reject, 200, 'foo');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'bar');
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'baz');
});

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); // Output: ['foo', 'bar', 'baz']
  })
  .catch(error => {
    console.error('At least one promise rejected:', error);
  });
