import { projectMaker } from "./projectConstrutor";
import { taskMaker } from "./taskConstructor";
import { displayTasks } from "./displayTasks";
const projArr = [];
const tasksArr = [];

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
  let a = -1;
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

      //display to page
      function displayArr(arg) {
        for (let i = 0; i < arg.length; i++) {
          let newName = arg[i].name;
          anc.id = [i];
          anc.innerHTML = newName;
        }
      }
      projects.appendChild(projectContainer);
      projectContainer.appendChild(projectUl);
      projectUl.appendChild(anc);
      displayArr(projArr);
      projInput.value = "";

      anc.addEventListener("click", () => {
        for (let i = 0; i < projArr.length; i++) {
          if (anc.id == [i]) {
            const ancContainer = document.createElement("div");
            ancContainer.id = "ancContainer";
            const newtask = document.createElement("li");
            const subAnc = document.createElement("a");
            const titleLabel = document.createElement("p");
            const titleInput = document.createElement("input");
            const descLabel = document.createElement("p");
            const descInput = document.createElement("textarea");
            const taskAdd = document.createElement("button");
            const taskCancel = document.createElement("button");

            projectContainer.appendChild(ancContainer);
            ancContainer.appendChild(titleLabel);
            ancContainer.appendChild(titleInput);
            ancContainer.appendChild(descLabel);
            ancContainer.appendChild(descInput);
            ancContainer.appendChild(taskAdd);
            ancContainer.appendChild(taskCancel);

            titleLabel.innerHTML = "Task Title";
            descLabel.innerHTML = "Description";
            descInput.id = "descInput";
            descInput.rows = "5";
            descInput.cols = "22";
            taskAdd.innerHTML = "Add";
            taskAdd.id = "taskAdd";
            taskCancel.innerHTML = "Cancel";

            //add sub task event
            taskAdd.addEventListener("click", () => {
              a++;

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
                  subAnc.id = a;
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
            subAnc.addEventListener("click", (e) => {
              for (let i = 0; i < tasksArr.length; i++) {
                if (subAnc.id == [i]) {
                  //variables
                  const pfDiv = document.createElement("div");
                  pfDiv.classList.add("pfDiv");
                  const pfTitle = document.createElement("h3");
                  const pfDescLabel = document.createElement("p");
                  const pfDescBox = document.createElement("textarea");
                  const pfDate = document.createElement("input");
                  pfDate.type = "date";
                  const pfDelete = document.createElement("button");
                  const pfClose = document.createElement("button");
                  //edit the below

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

                  pfDescLabel.innerHTML = "Description";
                  pfDescBox.innerHTML = String(tasksArr[i].description);
                  pfClose.innerHTML = "Close";
                  pfDelete.innerHTML = "Delete";

                  //deletes the task
                  pfDelete.addEventListener("click", () => {
                    tasksArr.splice(i, 1, 0);
                  });

                  //closes the taskFocus window
                  pfClose.addEventListener("click", () => {
                    projectContainer.removeChild(pfDiv);
                    projectContainer.appendChild(projectTasks);

                    //edit the above */
                  });
                }
              }
            });
          }
        }
      });
    }
  });

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

export { createProject };
