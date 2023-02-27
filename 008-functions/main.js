//Functions are fun! 

function doMath(a, b) {
    let result = a * b
    return result
    // console.log(`this is the result ${a + b}`)
    // console.log(`this is the result ${a - b}`)
    // console.log(`this is the result ${a * b}`)
    // console.log(`this is the result ${a / b}`)
}

doMoreMath = (a, b) => a * b
 
console.log(doMoreMath(20, 30))

//console.log(`this result was returned from the function ${result}`)


totalVol = (x, y, z) => x * y * z
    
console.log(`Total volume of the box is ${totalVol(2, 4, 2)} `)


function areaOfCircle(x) {
    const pi = 3.14
    let radius = x
    let area = pi * x * x
    return area
}
const area = areaOfCircle(3)
console.log(`The area of the circle is ${area}`)


//So far I am enjoying the content the professor is providing. It's fairly easy to follow along and is engaging. Explanations are clear and done well. 