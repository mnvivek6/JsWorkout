var removeElement = function(nums, val) {
    
  
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]==val) {
            nums.splice(i,1)
            i--
        }
        
    }
    return nums
};

console.log(removeElement([1,1,2,3,3,4,4],3));