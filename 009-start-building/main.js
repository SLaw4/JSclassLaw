//Update the DOM

const myArr = []

const updateDOM = (input) => {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGCost = (miles, gallons, price = 3.79) => {
    const MPG = miles/gallons
    const tripCost = MPG * price
    return tripCost
    myArr.push(MPG, tripCost)
    myArr.splice(MPG, tripCost)
}



updateDOM(trackMPGCost(300, 10, 5.40))
updateDOM(trackMPGCost(320, 12, 5))



// const mileage = (miles, gallons, price) => {
//     updateDOM(miles/gallons * price)
// }

// const myMPG = mileage(300, 10, 3.79)

// ANOTHER WAY TO WRITE IT 
    // const mileage = (miles, gallons, price) => (miles/gallons * price)
    // updateDOM(mileage(300, 10, 3.50))

// IF PRICE IS DELETED 
    // const mileage = (miles, gallons, price) => (miles/gallons * price)
    // updateDOM(mileage(300, 10,)) // result: input becomes NaN because price is undefined 

// SOLUTION: SET A DEFAULT PRICE 
    // const mileage = (miles, gallons, price = 3.79) => (miles/gallons * price)
        
    // updateDOM(mileage(300, 10,))

// BUT IF YOU END UP PASSING A VALUE TO PRICE, IT WILL TAKE THAT FIRST 
        // const mileage = (miles, gallons, price = 3.79) => (miles/gallons * price)
        
        // updateDOM(mileage(300, 10, 5.40)) Would only take the value 3.79 if 5.40 was not there