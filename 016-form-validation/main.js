//Update the DOM
const FORM = document.getElementById("form-input")
const ERR = document.getElementById('err')

const MY_MPG = []
const MY_TRIP_COST = []

const updateDOM = (input) => {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGandCost = (miles, gallons, price = 3.79) => {
    const MPG = Math.round(miles/gallons)
    const tripCost = Math.round(gallons * price)
    updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`)
    MY_MPG.push(MPG)
    MY_TRIP_COST.push(tripCost)
}

const calculateSUM = (arr) => {
    let sum = 0
    for (value of arr) {
        sum += value
    }
    return sum
}

const calculateAvg = () => {  
    let sumMPG = calculateSUM(MY_MPG)
    let sumTripCost = calculateSUM(MY_TRIP_COST)
    let avgMPG = Math.round(sumMPG/MY_MPG.length)
    let avgTripCost = Math.round(sumTripCost/MY_TRIP_COST.length)
    updateDOM(`Average MPG is ${avgMPG}`)
    updateDOM(`Average trip is ${avgTripCost}`)
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
        ERR.textContent = ""
        trackMPGandCost(miles, gallons, price)
        calculateAvg(miles, gallons, price)
    }
})
