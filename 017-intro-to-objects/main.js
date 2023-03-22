const myArr = []

// console.log(typeof myObj)
// console.log(typeof myArr)
// console.log(myArr === myObj)
const myNumber = 9 
const myObj = {
    name: 'Rio',
    age: 59,
    hobbies: ['coding', 'running', 'workout'],
    mobile: {
        make: 'pixel 7', 
        OS: 'android',
    },
    myGreeting: function(person) {
        return `What is UP ${person}`
    },
}

const greeting = myObj.myGreeting('jane')
console.log(greeting)
