function removeDuplicates(nums) {
    
    let result =  [...new Set(nums)]
       for (let i = 0; i < result.length; i++) {
        
             nums[i]=result[i]
        
       }
       return result.length
}

let nums = [1, 1, 2, 2, 3, 4, 4, 5];

console.log(removeDuplicates(nums)); 
