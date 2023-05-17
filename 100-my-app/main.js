// Global variables
const HABIT = document.getElementById("habit");
const COMPLETE = document.getElementById("complete");
const DATE = document.getElementById("startDate");
const GOAL = document.getElementById("goal");
const REWARD = document.getElementById("reward");
const FORM = document.getElementById("form-input");
const TBL_OUTPUT = document.getElementById("table-out");

// const MY_HABIT = [];

// Function
function getHabitData() {
  const habitDataJSON = localStorage.getItem('habitdata')
  if(habitDataJSON !== null) {
      return JSON.parse(habitDataJSON)
  } else {
      return []
  }
}
function saveHabitData(MY_HABIT) {
  localStorage.setItem('habitdata', JSON.stringify(MY_HABIT))
}
const MY_HABIT = getHabitData()
renderTable()

function updateDOM(input) {
  const divEl = document.querySelector("#output");
  const p = document.createElement("p");
  p.textContent = input;
  divEl.appendChild(p);
}

function renderGoalHeadings() {
  const tbl = document.createElement("table");
  const headings = [
    "Habit:",
    "Start Date",
    "Goal duration(30 days recommended):",
    "Goal reward:",
    "Edit/Delete",
  ];
  const tr = document.createElement("tr");
  headings.forEach(function (heading) {
    let th = document.createElement("th");
    th.textContent = heading;
    tr.appendChild(th);
  });
  tbl.appendChild(tr);
  return tbl;
}

function renderTable() {
  TBL_OUTPUT.innerHTML = "";
  if (MY_HABIT.length !== 0) {
    const tbl = renderGoalHeadings();
    TBL_OUTPUT.appendChild(tbl);
    MY_HABIT.forEach(function (obj, index) {
      const tr = document.createElement("tr");
      for (const key in obj) {
        let td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
      }
      const btnTD = renderEditDelBtn(index);
      tr.appendChild(btnTD);
      tbl.appendChild(tr);
    });
  }
}

function renderEditDelBtn(index) {
  const td = document.createElement("td");
  const editBtn = document.createElement("button");

  editBtn.textContent = "edit";
  const delBtn = document.createElement("button");
  delBtn.textContent = "delete";
  editBtn.addEventListener("click", function (e) {
    FORM[0].value = MY_HABIT[index].habit;
    FORM[1].value = MY_HABIT[index].goal;
    FORM[2].value = MY_HABIT[index].date;
    FORM[3].value = MY_HABIT[index].reward;
    MY_HABIT.splice(index, 1);
    //MY_HABIT[index].message = `Great job! You started ${MY_HABIT[index].habit} on ${MY_HABIT[index].date} for a duration of ${MY_HABIT[index].goal} days!`
    renderTable(MY_HABIT);
    const disable_btn = document.querySelectorAll(".tbl-btn");
    disable_btn.forEach(function (btn) {
      btn.setAttribute("disabled", true);
    });
  });
  delBtn.addEventListener("click", function (e) {
    MY_HABIT.splice(index, 1);
    renderTable(MY_HABIT);
  });
  editBtn.classList.add("tbl-btn");
  delBtn.classList.add("tbl-btn");
  td.appendChild(editBtn);
  td.appendChild(delBtn);
  return td;
}

function renderCheckboxes() {
  const rows = 1;
  const columns = parseInt(document.getElementById("goal").value);
  const table = document.createElement("table");
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < columns; j++) {
      const cell = document.createElement("td");
      const day = i * columns + j + 1;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      cell.appendChild(checkbox);
      cell.appendChild(document.createTextNode(`Day ${day}`));
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
  const checkboxes = table.querySelectorAll('input[type="checkbox"]');
  let checkedCount = 0;

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        checkedCount++;
      } else {
        checkedCount--;
      }

      counterCell.textContent = `Progress: ${checkedCount} days`;
    });
  });
  const counterRow = document.createElement("tr");
  const counterCell = document.createElement("td");
  counterCell.colSpan = columns;
  counterCell.textContent = `Progress: ${checkedCount} days`;
  counterRow.appendChild(counterCell);
  table.insertBefore(counterRow, table.firstChild);

  TBL_OUTPUT.appendChild(table);
}

function sumOfHabits() {
  const logHabit = HABIT.value;
  const startDate = DATE.value;
  const goalDuration = GOAL.value;
  const goalReward = REWARD.value;
  const message = alert(
    `Great job! You started ${logHabit} on ${startDate} for a duration of ${goalDuration} days!`
  );

  const endDate = calculateEndDate(startDate, goalDuration);
  const isCompleted = checkGoalCompletion(endDate);
  if (isCompleted) {
    alert(
      `Great job! You completed the habit "${logHabit}" from ${startDate} to ${endDate}!`
    );
  } else {
    alert(
      `Keep going! You started the habit "${logHabit}" on ${startDate}, and your goal duration is ${goalDuration} days.`
    );
  }
  saveHabitData(MY_HABIT)
  return {
    habit: logHabit,
    date: startDate,
    goal: goalDuration,
    reward: goalReward,
    //msg: message,
  };
}
function calculateEndDate(startDate, goalDuration) {
  // Calculate the end date based on the start date and goal duration
  const start = new Date(startDate);
  const duration = parseInt(goalDuration);
  const endDate = new Date(start.getTime() + duration * 24 * 60 * 60 * 1000);
  return endDate.toDateString();
}

function checkGoalCompletion(endDate) {
  // Compare the end date with the current date
  const end = new Date(endDate);
  const today = new Date();
  return end <= today;
}
function isFormValid(habit) {
  const errMsg = [];
  if (habit === "") {
    errMsg.push("Make sure to include a habit");
  } else {
    return true;
  }
}

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  const isValid = isFormValid(HABIT.value);
  if (isValid) {
    const dataObj = sumOfHabits(HABIT.value);
    MY_HABIT.push(dataObj);
    renderGoalHeadings();
    renderTable(MY_HABIT);
    renderCheckboxes();
    saveHabitData(MY_HABIT)
  }
  FORM.reset();
});
