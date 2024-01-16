// Palindrome numbers 

// var isPalindrome = function(x) {
    
//      return x<0 ? false:(x===+ x.toString().split("").reverse().join(""))
   
// };

//  console.log(isPalindrome(123))


// Longest Common Prefix

var longestCommonPrefix = function(strs) {
    
    let output =""
    for (let i = 0; i < strs[0].length; i++) {
        
       
        if (strs.every(str=>str[i]=== strs[0][i]))  output += strs[0][i]
        else break;
    }
    return output

};

console.log( longestCommonPrefix(["flower","flow","flight"]))