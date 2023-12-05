
let employee = {
	eid: "E102",
	ename: "Jack",
	eaddress: "New York",
	salary: 50000
}
console.log("=========Deep Copy========");
const newEmployee = JSON.parse(JSON.stringify(employee))
console.log( employee);
console.log( newEmployee);

newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log( employee);
console.log( newEmployee);
