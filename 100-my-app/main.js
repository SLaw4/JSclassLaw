function updateDOM (input) {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

// Global variables
const habit = 'read'
const complete = true
const days = 5

// Conditional statement
// if (complete && habit === 'exercise' || days === 5) {
//   updateDOM('Yay! You did it!')
// } else {
//   updateDOM('Time to get back on track')
// }
  

// Function
function sumOfHabits (habit, days) {
  updateDOM(`Great job! You did ${habit} for ${days} days this week! `)
  return {
    habit: habit,
    days: days,
  }
}
sumOfHabits('reading', 5)

