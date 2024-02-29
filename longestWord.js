
const sentence = 'hi this is vive'


let longest=(sentence)=>{

    const result = sentence.split(' ')
     const longest =  result.reduce((acc,curr)=>{
          if (acc.length>curr.length) {
            return acc
          }else{
            return curr
          }
    })
    return longest
}

console.log(longest(sentence));