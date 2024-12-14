const userObject = {
    firstName: "Kennedy",
    lastName: "Martins",
    age: 20,
   };
   
   const handler = {
    get: function(target, property) {
       console.log(`Getting property "${property}"`);
       return target[property];
    },
    set: function(target, property, value) {
       console.log(`Setting property "${property}" to value "${value}"`);
       target[property] = value;
    },
   };
   
   const proxy = new Proxy(userObject, handler);
   
   console.log(proxy.firstName); // Logs and returns "Kennedy"
   proxy.age = 23; // Logs and sets age to 23
   
   console.log(userObject);