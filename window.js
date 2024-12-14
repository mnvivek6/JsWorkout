function Animal(name) {
    this.name = name; // Each animal gets its own name
}

// Add a shared method to the prototype
Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound.`);
};

// Create two animals
const dog = new Animal("Dog");
const cat = new Animal("Cat");

// Call the shared method
dog.speak(); // "Dog makes a sound."
cat.speak(); // "Cat makes a sound."
