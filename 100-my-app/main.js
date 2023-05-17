// Global variables
const HABIT = document.getElementById('habit')
const COMPLETE = document.getElementById('complete')
const DATE = document.getElementById('startDate')
const GOAL = document.getElementById('goal')
const REWARD = document.getElementById('reward')
const FORM = document.getElementById('form-input')
const TBL_OUTPUT = document.getElementById('table-out');

const MY_HABIT = []


// Function
function updateDOM (input) {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}
function renderGoalHeadings() {
    const tbl = document.createElement('table');
    const headings = ['Habit:', 'Start Date', 'Goal duration(30 days recommended):', 'Goal reward:' ,'Edit/Delete'];
    const tr = document.createElement('tr');
    headings.forEach(function (heading) {
        let th = document.createElement('th');
        th.textContent = heading;
        tr.appendChild(th);
    });
    tbl.appendChild(tr);
    return tbl;
} 

function renderTable(MY_HABIT) {
  TBL_OUTPUT.innerHTML = '';
  if(MY_HABIT.length !== 0) {
      const tbl = renderGoalHeadings();
      TBL_OUTPUT.appendChild(tbl);
      MY_HABIT.forEach(function (obj) {
          const tr = document.createElement('tr');
          for (const key in obj) {
              let td = document.createElement('td');
              td.textContent = obj[key];
              tr.appendChild(td);
          }
          const btnTD = renderEditDelBtn(MY_HABIT);
          tr.appendChild(btnTD);
          tbl.appendChild(tr);
      });
  } 
}
function renderEditDelBtn(index) {
  const td = document.createElement('td');
  const editBtn = document.createElement('button');
  
  editBtn.textContent = 'edit';
  const delBtn = document.createElement('button');
  delBtn.textContent = 'delete';
  editBtn.addEventListener('click', function(e) {
      FORM[0].value = MY_HABIT[0].habit
      FORM[1].value = MY_HABIT[index].goal
      FORM[2].value = MY_HABIT[index].date
      FORM[3].value = MY_HABIT[index].reward
      MY_HABIT.splice(index, 1)
      
      const disable_btn = document.querySelectorAll('.tbl-btn')
      disable_btn.forEach(function(btn){
          btn.setAttribute('disabled', true)
      })
  })
  delBtn.addEventListener('click', function(e){
     MY_HABIT.splice(index, 1)
     renderTable(MY_HABIT)
  }) 
  editBtn.classList.add('tbl-btn')
  delBtn.classList.add('tbl-btn')
  td.appendChild(editBtn);
  td.appendChild(delBtn);
  return td;

}

function renderCheckboxes() {
  const rows = 1
  const columns = parseInt(document.getElementById('goal').value)
  const table = document.createElement('table')
  for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < columns; j++) {
      const cell = document.createElement('td');
        const day = i * columns + j + 1;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        cell.appendChild(checkbox);
        cell.appendChild(document.createTextNode(`Day ${day}`));
        row.appendChild(cell);
    }

    table.appendChild(row);
  }

  // TBL_OUTPUT.innerHTML = '';
  TBL_OUTPUT.appendChild(table);
}
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
  const goalReward = REWARD.value
  const message = updateDOM(`Great job! You started ${logHabit} on ${startDate} for a duration of ${goalDuration} days!`)
  return {
    habit: logHabit,
    date: startDate,
    goal: goalDuration,
    reward: goalReward,
    // msg: message,
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
    renderGoalHeadings()
    renderTable(MY_HABIT)
    renderCheckboxes(MY_HABIT)
  }
  FORM.reset();
})
 