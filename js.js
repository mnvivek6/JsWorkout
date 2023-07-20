
function Name(){
    this.names='hello'
    this.age=22
}


const n=new Name()
// Modify the prototype object of the Name constructor
 
Name.prototype.place='calicut'

// Access the 'place' property on the 'n' object
console.log(n.place);

