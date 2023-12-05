// console.log('hi');
// var distributeCandies = function(candies, num_people) {
    
//     let result=[]
//     let numcandi=1

// for (let j = 1; j <candies; j++) {
 
    
//         k=0
//     for(let i = 0,k=0 ; i < num_people;i++,k++){
          
//            candies -=numcandi
//            numcandi++
//     }
//     return result
// }

// };
// distributeCandies(10,3)

var tribonacci = function(n) {
    let array=[n+1]
   array[0]=0;
   array[1]=1;
   array[2]=1

    for(let i=3;i<n+1;i++){
       
       array[i]= array[i-1]+array[i-2]+array[i-3]
      
    }
    console.log( array[n]);
    
};

tribonacci(4);