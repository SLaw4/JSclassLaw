const FORM = document.getElementById("form-input")
const ERR = document.getElementById('err')
const AVG_OUTPUT = document.getElementById('output-avg')

const trackingObj = {
    myMPG: [],
    myTripCost: [],
    updateDOM: function(input, id) {
        const divEl = document.querySelector(id)
        const p = document.createElement('p')
        p.textContent = input
        divEl.appendChild(p)
    },
    trackMPGandCost: function(miles, gallons, price=3.79) {
        const MPG = Math.round(miles/gallons)
        const tripCost = Math.round(gallons * price)
        this.updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`, '#output')
        this.myMPG.push(MPG)
        this.myTripCost.push(tripCost)
    },
    calculateSUM: function(arr) {
        let sum = 0
        for (value of arr) {
            sum += value
        }
        return sum
    },
    calculateAvg: function() {
        let sumMPG = this.calculateSUM(this.myMPG)
        let sumTripCost = this.calculateSUM(this.myTripCost)
        let avgMPG = Math.round(sumMPG/this.myMPG.length)
        let avgTripCost = Math.round(sumTripCost/this.myTripCost.length)
        this.updateDOM(`Average MPG is ${avgMPG}`, '#output-avg')
        this.updateDOM(`Average trip cost is ${avgTripCost}`, '#output-avg') 
    },
    validateForm: function (e) {
        const errMsg = []
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
            this.trackMPGandCost(miles, gallons, price)
            this.calculateAvg()
        }
        FORM.reset()
    }
}
FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    trackingObj.validateForm(e)
    
})


