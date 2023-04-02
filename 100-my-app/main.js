function updateDOM (input) {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

// Global variables
const HABIT = document.getElementById('habit')
const COMPLETE = document.getElementById('complete')
const DATE = document.getElementById('date')
const FORM = document.getElementById('form-input')

// Conditional statement
// if (complete && habit === 'exercise' || days === 5) {
//   updateDOM('Yay! You did it!')
// } else {
//   updateDOM('Time to get back on track')
// }
  

// Function
function sumOfHabits (habit) {
  const logHabit = HABIT.value
  const todayDate = DATE.value
  updateDOM(`Great job! You completed ${logHabit} on ${todayDate}!`)
  return {
    habit: habit,
  }
}
//sumOfHabits('reading', 5)

FORM.addEventListener('submit', (e) => {
  e.preventDefault()
  sumOfHabits(habit)
})
// updated commit 