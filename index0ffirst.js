var strStr = function(haystack, needle) {
    
// let result =''
// let arr=[]
//     for (let i = 0; i < haystack.length; i++) {
         
//         if (haystack[i]==needle[i]) {
            
//             if (result.length<=needle.length) {
//                 result+= haystack[i]
//                 arr.push(i)
//             }
//         }
//     }
//    if (result.length==0) {
//     return -1
//    }
//   if (result==needle) {
//     return arr[0]
//   }else{
//     return -1
//   }


    return haystack.indexOf(needle);

};

console.log(strStr('harivivek','vivek'));