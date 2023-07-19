

const promises = [
    Promise.resolve(),
    Promise.reject('Error 1'),
    Promise.resolve('Success 2'),
    Promise.reject('Error 2')
  ];
  
  Promise.allSettled(promises)
    .then(results => {
      console.log('Results:', results);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  