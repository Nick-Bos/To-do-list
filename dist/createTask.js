import { taskMaker } from "./taskConstructor";

const tasksArr = [];

const newTask = () => {
  function taskInputAppend() {
    const side = document.querySelector(".side");
    const taskAddContainer = document.createElement("div");
    const titleLabel = document.createElement("p");
    const titleInput = document.createElement("input");
    const descLabel = document.createElement("p");
    const descInput = document.createElement("textarea");
    const dateLabel = document.createElement("p");
    const dateInput = document.createElement("input");
    const taskAdd = document.createElement("button");
    const taskCancel = document.createElement("button");

    side.appendChild(taskAddContainer);
    taskAddContainer.appendChild(titleLabel);
    taskAddContainer.appendChild(titleInput);
    taskAddContainer.appendChild(dateLabel);
    taskAddContainer.appendChild(dateInput);
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
    dateLabel.innerHTML = "Date";
    dateInput.type = "date";
    taskAdd.innerHTML = "Add";
    taskAdd.id = "taskAdd";
    taskCancel.innerHTML = "Cancel";

    //runs taskmaker constructor
    taskAdd.addEventListener("click", () => {
      const newArr = new taskMaker(
        titleInput.value,
        descInput.value,
        dateInput.value
      );
      tasksArr.push(newArr);
      console.log(tasksArr);
      titleInput.value = "";
      descInput.value = "";
      dateInput.value = "";
    });

    //cancel closes the taskAddContainer
    taskCancel.addEventListener("click", () => {
      side.removeChild(taskAddContainer);
    });
  }

  //opens taskAddContainer
  const taskBtn = document.getElementById("taskBtn");
  taskBtn.addEventListener("click", () => {
    const target = document.getElementById("taskAddContainer");
    if (document.contains(target)) {
      return;
    } else taskInputAppend();
  });
};

export { newTask };
