import { saveHabitData } from './habitData.js';
const HABIT = document.getElementById("habit");
const DATE = document.getElementById("startDate");
const GOAL = document.getElementById("goal");
const REWARD = document.getElementById("reward");
export function isFormValid(habit) {
  const errMsg = [];
  if (habit === "") {
    errMsg.push("Make sure to include a habit");
  } else {
    return true;
  }
}

export function sumOfHabits(habit, MY_HABIT) {
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
  saveHabitData(MY_HABIT);
  return {
    habit: logHabit,
    date: startDate,
    goal: goalDuration,
    reward: goalReward,
    //msg: message,
  };
}
export function calculateEndDate(startDate, goalDuration) {
  // Calculate the end date based on the start date and goal duration
  const start = new Date(startDate);
  const duration = parseInt(goalDuration);
  const endDate = new Date(start.getTime() + duration * 24 * 60 * 60 * 1000);
  return endDate.toDateString();
}

export function checkGoalCompletion(endDate) {
  // Compare the end date with the current date
  const end = new Date(endDate);
  const today = new Date();
  return end <= today;
}
