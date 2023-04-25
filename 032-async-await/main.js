// function getData() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(46)
//         },1)
//     })
// }
// async function start() {
//     const result = await getData()
//     console.log(result)
// }
// async function start2() {
//     getData()
//         .then(result => {
//             console.log(result)
//         })
// }
// async function start() {
//     const data = await fetch('https://api.weather.gov/gridpoints/HNX/53,100/forecast')
//     const result = await data.json()
//     console.log(result.properties.periods[1].shortForecast)
// }

// async function start2() {
//     fetch('https://api.weather.gov/gridpoints/HNX/53,100/forecast')
//     .then(data => data.json())
//     .then(result => {
//         console.log(result.properties.periods[1].shortForecast)
//     })
// }

// start()

function getData() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Here is your data!')
        }, 1)
    })
}

// function onSuccess() {

// }

// function onFailure() {

// }
async function start() {
    try {
        const result = await getData()
        //SUCCCESS
    } catch (error) {
        //FAILURE
    }
} 

// async function start2() {
//     const result = await getData()
//     .catch(error => {
//         console.log(`ERROR: ${error}`)
//     })
//     console.log(result)
// } 
start()
// 1. async and await must be used together
//     exceptions: JS modules & Chrome DevTools Console
// 2. async/await only affects Promise receiver 
// 3. You can await any function that returns a Promise 
// 4. Any function can be converted to async
// 5. All async functions return a promise
// 6. Error handling with try/catch