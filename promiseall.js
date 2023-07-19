const getName = new Promise((resolve, reject) => {
    resolve('vivekmn');
  });
  
  const getNumber = new Promise((resolve, reject) => {
    resolve('8281081084');
  });
  
  Promise.all([getName, getNumber]).then(result => { console.log(result); })
  