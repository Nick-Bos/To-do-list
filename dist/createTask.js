import { taskMaker } from "./taskConstructor";

const tasksArr = [];

const newTask = () => {
  function test() {
    const side = document.querySelector(".side");
    const taskAddContainer = document.createElement("div");
    const titleInput = document.createElement("input");
    const descInput = document.createElement("input");
    const dateInput = document.createElement("input");
    const taskAdd = document.createElement("button");
    const taskCancel = document.createElement("button");

    side.appendChild(taskAddContainer);
    taskAddContainer.appendChild(titleInput);
    taskAddContainer.appendChild(descInput);
    taskAddContainer.appendChild(dateInput);
    taskAddContainer.appendChild(taskAdd);
    taskAddContainer.appendChild(taskCancel);

    taskAddContainer.id = "taskAddContainer";
    taskAdd.innerHTML = "Add";
    taskAdd.id = "taskAdd";
    taskCancel.innerHTML = "Cancel";

    taskAdd.addEventListener("click", () => {
      tasksArr.push(
        new taskMaker(titleInput.value, descInput.value, dateInput.value)
      );
      console.log(tasksArr);
    });
  }
  const taskBtn = document.getElementById("taskBtn");
  taskBtn.addEventListener("click", () => {
    test();
  });
};

export { newTask };
