const displayTasks = (a) => {
  //task display items
  const myArray = a;
  const tasks = document.querySelector(".tasks");
  const tasksContainer = document.createElement("div");
  tasksContainer.id = "tasksContainer";
  const list = document.createElement("li");
  list.id = "listItems";
  const anc = document.createElement("a");

  //taskfocus window
  const taskFocus = document.createElement("div");
  taskFocus.classList.add("tfDiv");
  const tfTitle = document.createElement("h3");
  const tfDescLabel = document.createElement("p");
  const tfDescBox = document.createElement("textarea");
  const tfDate = document.createElement("input");
  tfDate.type = "date";
  const tfDelete = document.createElement("button");
  const tfClose = document.createElement("button");

  //append to Dom
  tasks.appendChild(tasksContainer);
  tasksContainer.appendChild(list);
  list.appendChild(anc);

  displayArr(myArray);

  function displayArr(arg) {
    for (let i = 0; i < arg.length; i++) {
      let newTitle = arg[i].title;
      anc.id = [i];
      anc.innerHTML = newTitle;
    }
  }

  anc.addEventListener("click", (e) => {
    for (let i = 0; i < myArray.length; i++) {
      if (anc.id == [i]) {
        tasks.removeChild(tasksContainer);
        tasks.appendChild(taskFocus);
        taskFocus.appendChild(tfTitle);
        tfTitle.innerHTML = myArray[i].title;
        taskFocus.appendChild(tfDescLabel);
        taskFocus.appendChild(tfDescBox);
        tfDescBox.rows = "5";
        tfDescBox.cols = "22";
        taskFocus.appendChild(tfDate);
        taskFocus.appendChild(tfClose);
        taskFocus.appendChild(tfDelete);

        tfDescLabel.innerHTML = "Description";
        tfDescBox.innerHTML = String(myArray[i].description);

        tfClose.innerHTML = "Close";
        tfDelete.innerHTML = "Delete";

        //deletes the task
        tfDelete.addEventListener("click", () => {
          tasks.removeChild(taskFocus);
          tasks.removeChild(tasksContainer);
          myArray.splice(i, 1, 0);
        });

        //closes the taskFocus window
        tfClose.addEventListener("click", () => {
          tasks.removeChild(taskFocus);
          tasks.appendChild(tasksContainer);
        });
      }
    }
  });
};

export { displayTasks };
