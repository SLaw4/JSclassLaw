import { isFormValid,sumOfHabits } from "./form.js";
import { getHabitData, saveHabitData } from "./habitData.js";
import { renderGoalHeadings, renderTable, renderCheckboxes } from "./render.js";
// Global variables
const HABIT = document.getElementById("habit");
const FORM = document.getElementById("form-input");

const MY_HABIT = getHabitData();
renderTable(MY_HABIT);

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  const isValid = isFormValid(HABIT.value);
  if (isValid) {
    const dataObj = sumOfHabits(HABIT.value);
    MY_HABIT.push(dataObj);
    renderGoalHeadings();
    renderTable(MY_HABIT, FORM);
    renderCheckboxes();
    saveHabitData(MY_HABIT);
  }
  FORM.reset();
});
