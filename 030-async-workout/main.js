const formEL = document.getElementById('form')
const output = document.getElementById('output')

function updateDOM(input) {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

function getInput(callback) {
    const getExercise = document.getElementById('type').value
    const getReps = document.getElementById('reps').value
    updateDOM(`${getExercise} for ${getReps} reps`)
    setTimeout (() => {
        const getTime = document.getElementById('time').value
        callback(getTime)
    }, 2000)
}

formEL.addEventListener('submit', function(e) {
    e.preventDefault();
    const type = e.target.type.value
    const reps = parseFloat(e.target.reps.value)
    const time = parseFloat(e.target.time.value)
    getInput()
    formEL.reset()
})