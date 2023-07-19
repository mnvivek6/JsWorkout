let ar1=[1,2,3,4,5]

let ar2=[6,7,8,9,10]



let ar3=[100,...ar1, ...ar2,20,30,40,50];

console.log(ar3);


let obj1={

    country:"india"
}
let obj2={language:"english",language2:"malayalam"}

let obj3={population:2000}

let obj4={ ...obj1,...obj2,...obj3}

// console.log(obj4);


let obj5={saifu:'male',dileep:'female',arshu:'female',sulo:'female'}

let obj6={...obj1,...obj2,...obj3,...obj4,...obj5}
// console.log(obj6);

let obj7= { sama:'hhh',dora:'nnn',...obj1,...obj2,...obj3}
console.log(obj7);
