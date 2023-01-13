import { taskMaker } from "./taskConstructor";
import { displayTasks } from "./displayTasks";

const tasksArr = [];

const newTask = () => {
  function taskInputAppend() {
    const side = document.querySelector(".side");
    const taskAddContainer = document.createElement("div");
    const titleLabel = document.createElement("p");
    const titleInput = document.createElement("input");
    const descLabel = document.createElement("p");
    const descInput = document.createElement("textarea");
    const taskAdd = document.createElement("button");
    const taskCancel = document.createElement("button");

    side.appendChild(taskAddContainer);
    taskAddContainer.appendChild(titleLabel);
    taskAddContainer.appendChild(titleInput);
    taskAddContainer.appendChild(descLabel);
    taskAddContainer.appendChild(descInput);
    taskAddContainer.appendChild(taskAdd);
    taskAddContainer.appendChild(taskCancel);

    taskAddContainer.id = "taskAddContainer";
    titleLabel.innerHTML = "Title";
    descLabel.innerHTML = "Description";
    descInput.id = "descInput";
    descInput.rows = "5";
    descInput.cols = "22";
    taskAdd.innerHTML = "Add";
    taskAdd.id = "taskAdd";
    taskCancel.innerHTML = "Cancel";

    //runs taskmaker constructor
    taskAdd.addEventListener("click", () => {
      if (titleInput.value === "") {
        alert("Please enter a task title");
      } else {
        const newArr = new taskMaker(titleInput.value, descInput.value);
        tasksArr.push(newArr);
        //vv display task array code here vv
        displayTasks(tasksArr);
        titleInput.value = "";
        descInput.value = "";
      }
    });

    //cancel closes the taskAddContainer
    taskCancel.addEventListener("click", () => {
      side.removeChild(taskAddContainer);
      taskBtn.classList.remove("add-task-toggle");
      taskBtn.classList.add("button");
      const projBtn = document.getElementById("projBtn");
      projBtn.classList.remove("add-task-toggle");
      projBtn.classList.add("projBtn");
    });
  }

  //opens taskAddContainer
  const taskBtn = document.getElementById("taskBtn");
  taskBtn.addEventListener("click", () => {
    const target = document.getElementById("taskAddContainer");
    if (document.contains(target)) {
      return;
    } else taskInputAppend();
    taskBtn.classList.remove();
    taskBtn.classList.add("add-task-toggle");
    const projBtn = document.getElementById("projBtn");
    projBtn.classList.remove("projBtn");
    projBtn.classList.add("add-task-toggle");
  });
};

export { newTask };
