
function hi(message) {

console.log(message,'',this.name);
}

const person={name:'mnvivek'}

hi.call(person,'ahehhe')

hi.apply(person,['dfsofd slfjsdofs dfsodfds '])

const bind = hi.bind(person,'fjsdfsdfsdfdsfsfds dsfdsfd')
  bind()


