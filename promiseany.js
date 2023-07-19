
const promises = [

    Promise.reject('Error 1'),
    Promise.resolve('Success 1'),
    Promise.reject('Error 2'),
    Promise.resolve('Success 2')
  ];
  
  Promise.any(promises)
    .then(result => {
      console.log('The first successful result:', result);
    })
    .catch(error => {
      console.error('All Promises failed:', error);
    });
 
  
  
  
  
  
  
  