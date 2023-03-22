const FORM = document.getElementById("form-input")
const ERR = document.getElementById('err')
const AVG_OUTPUT = document.getElementById('output-avg')

// const MY_MPG = []
// const MY_TRIP_COST = []

const MY_DATA = []

const updateDOM = (input, id) => {
    const divEl = document.querySelector(id)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGandCost = (obj) => {
    const MPG = Math.round(miles/gallons)
    const tripCost = Math.round(gallons * price)
    updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`, '#output')
    //MY_MPG.push(MPG)
    //MY_TRIP_COST.push(tripCost)
}

// const calculateSUM = (arr) => {
//     let sum = 0
//     for (value of arr) {
//         sum += value
//     }
//     return sum
// }

const calculateAvg = () => {  
    let sumMPG = calculateSUM()
    let sumTripCost = calculateSUM()
    let avgMPG = Math.round(sumMPG/.length)
    let avgTripCost = Math.round(sumTripCost/.length)
    updateDOM(`Average MPG is ${avgMPG}`, '#output-avg')
    updateDOM(`Average trip cost is ${avgTripCost}`, '#output-avg')
}

FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    let errMsg = []
    const miles = parseInt(e.target.miles.value)
    const gallons = parseInt(e.target.gallons.value)
    const price = parseInt(e.target.price.value)
    if(miles === 0 || gallons === 0 || price === 0) {
        errMsg.push('Make sure you input value greater than 0')
    } 
    if (price > 1000) {
        errMsg.push('Really? I think this is an error...try again')
    }
    if(errMsg.length > 0) {
        ERR.textContent = errMsg
    } 
    else {
        ERR.textContent = ''
        AVG_OUTPUT.textContent = ''
        trackMPGandCost(miles, gallons, price)
        calculateAvg()
    }
    FORM.reset()
})
