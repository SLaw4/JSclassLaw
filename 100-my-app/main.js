// Global variables
const HABIT = document.getElementById('habit')
const COMPLETE = document.getElementById('complete')
const DATE = document.getElementById('date')
const FORM = document.getElementById('form-input')

const MY_HABIT = []


// Function
function updateDOM (input) {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}
// function addHabit() {

// }  
function sumOfHabits (e) {
  const logHabit = HABIT.value
  const todayDate = DATE.value
  updateDOM(`Great job! You completed ${logHabit} on ${todayDate}!`)
  return {
    habit: habit
  }
}

function isFormValid(habit) {
  const errMsg = []
  if (habit ='') {
    errMsg.push('Make sure to include a habit')
  } else {
    return true;
  }
}

FORM.addEventListener('submit', (e) => {
  e.preventDefault()
  const isValid = isFormValid(habit)
  if (isValid) {
    const dataObj = sumOfHabits(habit)
    MY_HABIT.push(dataObj)
  }
  FORM.reset();
})
 