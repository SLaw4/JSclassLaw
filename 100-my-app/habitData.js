export function getHabitData() {
  const habitDataJSON = localStorage.getItem("habitdata");
  if (habitDataJSON !== null) {
    return JSON.parse(habitDataJSON);
  } else {
    return [];
  }
}
export function saveHabitData(MY_HABIT) {
  localStorage.setItem("habitdata", JSON.stringify(MY_HABIT));
}
