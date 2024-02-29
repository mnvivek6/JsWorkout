

const word = 'malayalam'

const palindromecheck=(word)=>{

      const newword = word.split('').reverse().join('')
      if (word == newword)  return true
      else return  false
}

console.log(palindromecheck(word));