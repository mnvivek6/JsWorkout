function sayHello(message) {
    console.log(message + " " + this.name);
}
  
  const person = { name: "John" };
  
  sayHello.call(person, "Hello" ,"hi"); 

  sayHello.apply(person,['hi wher are yoiu am here i want to see you'])

  const binding= sayHello.bind(person,"lilly")

  binding()