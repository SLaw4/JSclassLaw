const formEL = document.getElementById('form')
const output = document.getElementById('output')

function updateDOM(message, el) {
    const newEl = document.createElement(el)
    newEl.textContent = message
    output.appendChild(newEl)
}

function startWorkout(type, reps, time, fn) {
    fn(`Start ${type} <> Goal reps is ${reps}`, 'p')
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            //resolve(fn(`Stop ${type}`, 'h1'))
            reject(fn('Something bad happened', 'h1'))
        }, time * 1000)
    })
}

function onError(err) {
    console.log(`ERROR ${err}`)
}
formEL.addEventListener('submit', function(e) {
    e.preventDefault();
    const type = e.target.type.value
    const reps = parseFloat(e.target.reps.value)
    const time = parseFloat(e.target.time.value)
    startWorkout(type, reps, time, updateDOM).then().catch(onError)
    formEL.reset()
})



    