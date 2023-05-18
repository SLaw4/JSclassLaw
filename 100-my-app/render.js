const TBL_OUTPUT = document.getElementById('table-out');
const FORM = document.getElementById('form-input');

export function renderGoalHeadings() {
  const tbl = document.createElement("table");
  const headings = [
    "Habit:",
    "Start Date",
    "Goal duration(30 days recommended):",
    "Goal reward:",
    "Progress",
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

export function renderTable(MY_HABIT) {
  TBL_OUTPUT.innerHTML = "";
  MY_HABIT.forEach(function (habitData) {
    const tbl = renderGoalHeadings();
    const tr = document.createElement("tr");

    for (const key in habitData) {
      let td = document.createElement("td");
      td.textContent = habitData[key];
      tr.appendChild(td);
    }
    const checkboxTD = renderCheckbox(habitData);
    tr.appendChild(checkboxTD);

    const btnTD = renderEditDelBtn(MY_HABIT, MY_HABIT.indexOf(habitData));
    tr.appendChild(btnTD);

    tbl.appendChild(tr);
    TBL_OUTPUT.appendChild(tbl);
  });
}
export function renderCheckbox(habitData) {
    const td = document.createElement("td");
    const checkboxes = document.createElement("div");
    checkboxes.className = "checkboxes";
  
    const goalDuration = parseInt(habitData.goal);
    for (let i = 1; i <= goalDuration; i++) {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `habit-${habitData.habit}-day-${i}`;
  
      const label = document.createElement("label");
      label.textContent = `Day ${i}`;
      label.setAttribute("for", `habit-${habitData.habit}-day-${i}`);
  
      checkboxes.appendChild(checkbox);
      checkboxes.appendChild(label);
    }
  
    td.appendChild(checkboxes);
    return td;
  }

export function renderEditDelBtn(MY_HABIT, index) {
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

export function renderCheckboxes(goalDuration) {
    const tbl = document.createElement("table");
    const headings = ["Progress"];
    const tr = document.createElement("tr");
  
    headings.forEach(function (heading) {
      let th = document.createElement("th");
      th.textContent = heading;
      tr.appendChild(th);
    });
  
    tbl.appendChild(tr);
  
    const checkboxesRow = document.createElement("tr");
    const checkboxesCell = document.createElement("td");
    checkboxesCell.colSpan = 1;
  
    const checkboxesTable = document.createElement("table");
    checkboxesTable.className = "checkboxes-table";
  
    for (let i = 1; i <= goalDuration; i++) {
      const row = document.createElement("tr");
      const cell = document.createElement("td");
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `day-${i}`;
  
      const label = document.createElement("label");
      label.textContent = `Day ${i}`;
      label.setAttribute("for", `day-${i}`);
  
      cell.appendChild(checkbox);
      cell.appendChild(label);
      row.appendChild(cell);
      checkboxesTable.appendChild(row);
    }
  
    checkboxesCell.appendChild(checkboxesTable);
    checkboxesRow.appendChild(checkboxesCell);
    tbl.appendChild(checkboxesRow);
  
    return tbl;
  }
