//Functions are fun! 

function doMath(a, b) {
    let result = a * b
    return result
    // console.log(`this is the result ${a + b}`)
    // console.log(`this is the result ${a - b}`)
    // console.log(`this is the result ${a * b}`)
    // console.log(`this is the result ${a / b}`)
}

const result = doMath(10, 4)
console.log(`this result was returned from the function ${result}`)



function totalVol(x, y, z) {
    let total = x * y * z
    return total
}

const total = totalVol(2, 10, 5)
console.log(`Total volume of the box is ${total}`)

function areaOfCircle(x) {
    const pi = 3.14
    let radius = x
    let area = pi * x * x
    return area
}

const area = areaOfCircle(3)
console.log(`The area of the circle is ${area}`)