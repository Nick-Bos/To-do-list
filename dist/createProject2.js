import { projectMaker } from "./projectConstrutor";
import { taskMaker } from "./taskConstructor";

const createProject2 = () => {
  //functions

  function displayArray(array, node) {
    node.innerHTML = ""; // clear the previous list
    for (let i = 0; i < array.length; i++) {
      const list = document.createElement("li"); // create a new list item
      const arrayItem = document.createElement("a"); //create a new arrayItem
      arrayItem.innerHTML = array[i];
      list.appendChild(arrayItem);
      node.appendChild(list);
      removeArrayItem(array, arrayItem);
    }
  }

  function removeArrayItem(array, node) {
    node.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        let item = event.target.innerHTML;
        let index = array.indexOf(item);
        if (index > -1) {
          array.splice(index, 1); // remove the item from the array
          event.target.parentNode.remove(); // remove the list item from the task list
        }
      }
    });
  }

  //arrays
  const projArr = [];
  const tasksArr = [];

  //variables
  const taskBtn = document.getElementById("taskBtn");
  const projBtn = document.getElementById("projBtn");
  const proj = document.querySelector(".side");
  const projContainer = document.createElement("div");
  const projName = document.createElement("p");
  const projInput = document.createElement("input");
  const projAdd = document.createElement("button");
  const projCancel = document.createElement("button");

  // Dom element content
  projName.innerHTML = "Project Name";
  projAdd.innerHTML = "Add";
  projCancel.innerHTML = "Cancel";

  //Dom element classlists/id
  projContainer.id = "projContainer";

  //add project btn event listener
  projBtn.addEventListener("click", () => {
    const target = document.getElementById("projContainer");
    if (document.contains(target)) {
      return;
    } else {
      proj.appendChild(projContainer);
      projContainer.appendChild(projName);
      projContainer.appendChild(projInput);
      projContainer.appendChild(projAdd);
      projContainer.appendChild(projCancel);
      taskBtn.classList.remove();
      taskBtn.classList.add("add-task-toggle");
      const projBtn = document.getElementById("projBtn");
      projBtn.classList.remove("projBtn");
      projBtn.classList.add("add-task-toggle");
    }
  });

  //project add btn event listener
  projAdd.addEventListener("click", () => {
    if (projInput.value === "") {
      alert("Please enter a Project Name");
    } else {
      const projects = document.querySelector(".projects");
      const projectContainer = document.createElement("div");
      projectContainer.classList.add("projectsContainer");
      const projectTasks = document.createElement("div");
      const projectUl = document.createElement("ul");
      const anc = document.createElement("a");
      const projNameArr = new projectMaker(projInput.value);
      projArr.push(projNameArr);

      projects.appendChild(projectContainer);
      projectContainer.appendChild(projectUl);
      projectUl.appendChild(anc);
      displayArr(projArr);
    }
  });
};

export { createProject2 };
