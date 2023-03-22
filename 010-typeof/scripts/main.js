let word = "12"
let num = 12
let just = true
const myConst = 42
console.log(num == word) // compares for equality after conversions
console.log(num === word) //compares for equality with no conversions

let myVar = null
console.log(`myVar is typeof ${typeof myVar}`)

console.log(word)
console.log(num)
console.log(just)

console.log(typeof word)
console.log(typeof num)
console.log(typeof just)

// don't use var
//if (true) {
//   const myConst = 43
//  console.log(myConst)
//}

//Scope
let x = "hey" // x is a global variable
function greeting() {
    let y = "everyone" // y is a local variable, only accesible inside the function greet()
    console.log(x + y)
}
greeting()
//console.log(x + y) //output: Uncaught ReferenceError: y is not defined

// == vs ===
let a = 0
let b = "0"
console.log(a == b) //output: true (compares for equality after conversions)
console.log(a === b) //output: false (compares for equality without conversions)


//Undefined and null
let c 
console.log(c) //output: undefined
console.log(typeof c) //output: undefined

let d = null
console.log(d) //output: null (null is an assigment value, can be assigned to a variable to represent no value)
console.log(typeof d) //output: object (shows distinction between undefined and null)

//Garbage collection
//JavaScript will automatically allocate memory when values are initially declared
//let person = { // global variable of "person" references object "Serene"
//    myName = "Serene" //"myName" is stored inside the object
//}
//if the value of "name" is overwritten, the reference is lost