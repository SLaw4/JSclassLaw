function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(46)
        },1)
    })
}
async function start() {
    const result = await getData()
    console.log(result)
}
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

start()

// 1. async and await must be used together
//     exceptions: JS modules & Chrome DevTools Console
// 2. async/