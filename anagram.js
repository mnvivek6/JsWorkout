

 const tocheckanagram=(word1,word2)=>{
        
    if (word1.length>word2.length||word1.length<word2.length) {
        return false
    }
    let words1 = word1.split('').sort().join('')
    let words2 = word2.split('').sort().join('')
    return words1== words2
   
 }

 console.log(tocheckanagram('listen','silent'));
 console.log(tocheckanagram('hello','world'));