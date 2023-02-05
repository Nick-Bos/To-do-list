import { taskMaker } from "./taskConstructor";
import { displayTasks } from "./displayTasks";
const projArr = [];
const tasksArr = [];
let projectIndex = 0;
let taskIndex = 0;

const newProject1 = (projectName) => {
  projectIndex += 1;
  const newProject = new projectMaker(projectName, projectIndex);
  return newProject;
};

const createProject = () => {
  // declare variables
  const taskBtn = document.getElementById("taskBtn");
  const projBtn = document.getElementById("projBtn");
  const proj = document.querySelector(".side");
  const projContainer = document.createElement("div");
  const projName = document.createElement("p");
  const projInput = document.createElement("input");
  const projAdd = document.createElement("button");
  const projCancel = document.createElement("button");

  //project focus window
  const pfDiv = document.createElement("div");
  pfDiv.classList.add("pfDiv");
  const pfTitle = document.createElement("h3");
  const pfDescLabel = document.createElement("p");
  const pfDescBox = document.createElement("textarea");
  const pfDate = document.createElement("input");
  pfDate.type = "date";
  const pfDelete = document.createElement("button");
  const pfClose = document.createElement("button");

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
      const projAnc = document.createElement("a");
      const projDelete = document.createElement("a");
      projDelete.classList = "projectDelete";
      projArr.push(newProject1(projInput.value));

      //display project name funtion
      function displayProjArr(array) {
        for (let i = 0; i < array.length; i++) {
          let newName = array[i].name;
          projAnc.innerHTML = newName;
        }
      }

      //Dom
      projects.appendChild(projectContainer);
      projectContainer.appendChild(projectUl);
      projectUl.appendChild(projAnc);
      projectContainer.appendChild(projDelete);
      projDelete.innerHTML = "Delete";
      displayProjArr(projArr);
      projInput.value = "";

      //opens project details window
      projAnc.addEventListener("click", () => {
        for (let i = 0; i < projArr.length; i++) {
          if (projArr[i].id - 1 == [i]) {
          }
        }
      });
    }
  });
};
/*
            //add sub task event
            taskAdd.addEventListener("click", () => {
              if (titleInput.value === "") {
                alert("Please enter a task Title");
              } else {
                const newTaskArr = new taskMaker(
                  titleInput.value,
                  descInput.value
                );

                projectTasks.classList.add("projectTasks");
                projectContainer.appendChild(projectTasks);
                projectTasks.appendChild(newtask);
                newtask.appendChild(subAnc);
                tasksArr.push(newTaskArr);

                for (let i = 0; i < tasksArr.length; i++) {
                  let newTitle = tasksArr[i].title;
                  subAnc.innerHTML = newTitle;
                }
              }

              projectContainer.removeChild(ancContainer);
            });

            //cancel sub task event
            taskCancel.addEventListener("click", () => {
              projectContainer.removeChild(ancContainer);
            });

            //subanc event listener
            subAnc.addEventListener("click", () => {
              for (let i = 0; i < tasksArr.length; i++) {
                //edit the below
                console.log(tasksArr);
                projectContainer.removeChild(projectTasks);
                projectContainer.appendChild(pfDiv);
                pfDiv.appendChild(pfTitle);
                pfTitle.innerHTML = tasksArr[i].title;
                pfDiv.appendChild(pfDescLabel);
                pfDiv.appendChild(pfDescBox);
                pfDescBox.rows = "5";
                pfDescBox.cols = "22";
                pfDiv.appendChild(pfDate);
                pfDiv.appendChild(pfClose);
                pfDiv.appendChild(pfDelete);
                pfDelete.id = [i + 1];

                pfDescLabel.innerHTML = "Description";
                pfDescBox.innerHTML = String(tasksArr[i].description);
                pfClose.innerHTML = "Save";
                pfDelete.innerHTML = "Delete";

                //deletes the task
                pfDelete.addEventListener("click", (e) => {
                  removeItem(tasksArr, e.target.id);
                  tasksArr.splice(i, 1);
                });

                //updates array and closes the taskFocus window
                pfClose.addEventListener("click", () => {
                  projectContainer.removeChild(pfDiv);
                  projectContainer.appendChild(projectTasks);
                  tasksArr[i].description = pfDescBox.value;
                  tasksArr[i].date = pfDate.value;
                  //edit the above 
                });
              }
            });
          }
        }
      });
    }
  });

  function removeItem(array, item) {
    for (let i = 0; i < array.length; i++) {
      if (item - 1 == i) {
        array.splice(i, 1);
      }
    }

    console.log(tasksArr);
  }

  //project focus cancel btn event listener
  projCancel.addEventListener("click", () => {
    proj.removeChild(projContainer);
    taskBtn.classList.remove("add-task-toggle");
    taskBtn.classList.add("button");
    const projBtn = document.getElementById("projBtn");
    projBtn.classList.remove("add-task-toggle");
    projBtn.classList.add("projBtn");
    projInput.value = "";
  });
};
*/
export { createProject };
