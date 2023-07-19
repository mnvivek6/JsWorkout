function getName() {

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("mnvivek")
        },3000)
    })
}

function getNumber() {

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("8281081084")
        },2000)
    })
    
}

Promise.all([getName(),getNumber()]).then((result)=>{
    console.log(result);
})

async function getUser() {

    let name=   await getName()
    console.log(name);
    let number= await getNumber()
    console.log(number);
}

getUser()

console.log("started ");
console.log('ended');