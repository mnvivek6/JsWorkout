const person = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: ''
    }
  };
  
  // Without optional chaining
  const country = person.address.country; // 'USA'
  
  // With optional chaining
  const countt= person.address?.country; // 'USA'
  
  // If any intermediate property is null or undefined
  const countrt = person.address?.state?.country; // undefined


//   console.log(countrt);
//   console.log(countt);
  console.log(country);
  console.log(countrt);
  console.log(countt);
  