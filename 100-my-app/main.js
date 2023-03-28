function updateDOM (input) {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

// Global variables
const protein = 'chicken'
const isHungry = true
const timeOfDay = 7
const dayOfWeek = 'Friday'
const money = 50

// Conditional statement
if ((dayOfWeek === 'Friday' && timeOfDay === 7) || isHungry) {
  if (protein === 'chicken') {
    const foodBudget = money/2
    updateDOM(`Order chicken for 2 people using $${foodBudget}`);
  } else if (protein === 'fish') {
    updateDOM('Order sushi');
  }
} else {
    updateDOM('Cook at home');
}