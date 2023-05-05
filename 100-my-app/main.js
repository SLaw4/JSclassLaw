// Global variables
const HABIT = document.getElementById('habit')
const COMPLETE = document.getElementById('complete')
const DATE = document.getElementById('startDate')
const GOAL = document.getElementById('goal')
const FORM = document.getElementById('form-input')

const MY_HABIT = []


// Function
function updateDOM (input) {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}
// function renderGoal() {
//   const newGoalTable = document.createElement('td')
//   const newCheckbox = document.createElement()
  
// } 

// function ifCompleted() {
//      Display message if completed or not (plus motivational text/quotes) 
// }

// function editHabit() {
// 
// }
function sumOfHabits () {
  const logHabit = HABIT.value
  const startDate = DATE.value
  const goalDuration = GOAL.value
  const message = updateDOM(`Great job! You started ${logHabit} on ${startDate} for a duration of ${goalDuration} days!`)
  return {
    habit: logHabit,
    date: startDate,
    goal: goalDuration,
    msg: message,
  }
}

function isFormValid(habit) {
  const errMsg = []
  if (habit === '') {
    errMsg.push('Make sure to include a habit')
  } else {
    return true;
  }
}

FORM.addEventListener('submit', (e) => {
  e.preventDefault()
  const isValid = isFormValid(HABIT.value)
  if (isValid) {
    const dataObj = sumOfHabits(HABIT.value)
    MY_HABIT.push(dataObj)
  }
  FORM.reset();
})
 