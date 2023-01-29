const displayTasks = (a) => {
  //task display items
  const myArray = a;
  const tasksContainer = document.createElement("div");
  tasksContainer.id = "tasksContainer";
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

  //first call of function to display tasks
  displayArr(myArray, tasksContainer);

  //display array function
  function displayArr(array, node) {
    // selector
    const tasks = document.getElementById("tasks");

    //checks array
    console.log(array);

    // Create tasks container if it doesn't exist
    let tasksContainer = document.getElementById("tasksContainer");
    if (!tasksContainer) {
      tasksContainer = document.createElement("ul");
      tasksContainer.id = "tasksContainer";
    }

    // Clear the list of tasks before updating
    tasksContainer.innerHTML = "";

    //for loop
    for (let i = 0; i < array.length; i++) {
      const list = document.createElement("li");
      list.id = "listItems";
      const anc = document.createElement("a");
      anc.innerHTML = array[i].title;
      list.appendChild(anc);
      tasksContainer.appendChild(list);

      anc.addEventListener("click", () => {
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
        tfDelete.id = [i + 1];
        console.log(tfDelete.id);

        tfDescLabel.innerHTML = "Description";
        tfDescBox.innerHTML = String(myArray[i].description);

        tfClose.innerHTML = "Save";
        tfDelete.innerHTML = "Delete";

        //closes and saves the taskFocus window values
        tfClose.addEventListener("click", () => {
          tasks.removeChild(taskFocus);
          tasks.appendChild(tasksContainer);
          myArray[i].description = tfDescBox.value;
          myArray[i].date = tfDate.value;
        });
      });

      // Append the updated tasks container to the tasks element
      tasks.appendChild(tasksContainer);
    }
  }
  //deletes the task
  tfDelete.addEventListener("click", (e) => {
    removeItem(myArray, e.target.id);
    tasks.removeChild(taskFocus);
  });

  function removeItem(array, item) {
    for (let i = 0; i < array.length; i++) {
      if (item - 1 == i) {
        array.splice(i, 1);
      }
    }
    displayArr(myArray, tasksContainer);
    console.log(myArray);
  }
};

export { displayTasks };

/*tasks.removeChild(taskFocus);
    tasks.removeChild(tasksContainer); */
