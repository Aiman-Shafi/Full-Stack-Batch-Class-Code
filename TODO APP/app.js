// Selectors

const taskForm = document.getElementById("task-input-form");
const taskInput = document.getElementById("new-task-input");
const allTasks = document.querySelector(".tasks");

//form event

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!taskInput.value) {
    alert("Please Insert a task!");
    return;
  }

  //   creating a task div / content
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("content");
  //   taskDiv.innerHTML = taskInput.value;

  // creating a input field
  const inputTask = document.createElement("input");
  inputTask.type = "text";
  inputTask.value = taskInput.value;
  inputTask.setAttribute("readonly", "readonly");

  //   creating a actions div
  const actions = document.createElement("div");
  actions.classList.add("actions");
  //   actions.classList.add("modifier");
  //   inputTask.setAttribute("id", "test");

  // creating a edit button
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("edit");
  actions.appendChild(editBtn);

  // creating a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete");
  actions.appendChild(deleteBtn);

  // adding the input task field to content div
  taskDiv.appendChild(inputTask);

  //adding actions div to the content div
  taskDiv.appendChild(actions);

  // adding the content div to All Task div
  allTasks.appendChild(taskDiv);

  // edit a task field
  editBtn.addEventListener("click", (e) => {
    // console.log("test edit");
    // console.log(e.target.innerText);
    if (editBtn.innerText.toLowerCase() === "edit") {
      //   console.log("edit button is clicked");
      inputTask.removeAttribute("readonly");
      editBtn.innerText = "Save";
      inputTask.focus();
    } else {
      editBtn.innerText = "Edit";
      inputTask.setAttribute("readonly", "readonly");
    }
  });

  deleteBtn.addEventListener("click", () => {
    allTasks.removeChild(taskDiv);
  });

  //   console.log(taskInput.value);
  taskInput.value = "";
});

// // document.getElementById("text").addEventListener("click", (e) => {
// //   console.log(e.target.innerHTML);
// // });

// document.querySelector("body").addEventListener("click", (event) => {
//   console.log(event);
// });
