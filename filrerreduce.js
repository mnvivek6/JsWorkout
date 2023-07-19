const arr=[1,2,3,4,5,6,7]

const evensum=arr.filter((x)=>x%2==0).reduce((total,x)=>total+x)

console.log(evensum);