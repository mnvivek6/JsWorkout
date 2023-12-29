

function sum(num1, num2) {

    let sum = num1 + num2
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (sum) {
                resolve(sum)
            } else {
                reject('1false')
            }
        }, 3000);
    })

}

function multiple(a, b) {
    let sum = a * b
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sum) {
                resolve(sum)
            } else {

                reject('2false')
            }
        }, 2000);

    })
}

Promise.race([sum(), multiple()])
.then((result) => { console.log(result); })
.catch((error) => { console.log(error); })